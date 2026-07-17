import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../db/prisma.provider.js';
import type {
  Pedido,
  Staus,
  FormaPagamento,
} from '../generated/prisma/client.js';

export type SalvarPedido = {
  data: Date;
  status: Staus;
  total: number;
  formaPagamento: FormaPagamento;
  entrega: {
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  itens: {
    produto: { id: number };
    precoUnitario: number;
    quantidade: number;
  }[];
};

@Injectable()
export class PedidoPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  obter(usuarioId: number): Promise<Pedido[]> {
    return this.prisma.client.pedido.findMany({
      where: { usuarioId },
      include: {
        itens: {
          include: { produto: { select: { id: true, nome: true } } },
        },
        entrega: true,
      },
    });
  }

  async obterPorId(id: number, usuarioId: number): Promise<Pedido | null> {
    return this.prisma.client.pedido.findUnique({
      where: { id, usuarioId },
      include: {
        itens: {
          include: { produto: { select: { id: true, nome: true } } },
        },
        entrega: true,
      },
    });
  }

  async salvar(pedido: Record<string, unknown>, usuarioId: number): Promise<Pedido> {
    const { entrega, itens, valorTotal, ...data } = pedido;
    const entregaData = entrega as Record<string, unknown>;
    return this.prisma.client.pedido.create({
      data: {
        ...data,
        usuarioId,
        total: valorTotal,
        entrega: {
          create: {
            nome: entregaData.nome,
            email: entregaData.email,
            telefone: (entregaData.cpf ?? entregaData.telefone) as string,
            endereco: (entregaData.logradouro ?? entregaData.endereco) as string,
            numero: (entregaData.numero ?? '') as string,
            complemento: entregaData.complemento as string | undefined,
            bairro: (entregaData.bairro ?? '') as string,
            cidade: entregaData.cidade as string,
            estado: entregaData.estado as string,
            cep: (entregaData.cep ?? '') as string,
          },
        },
        itens: {
          create: (itens as { produto: { id: number }; precoUnitario: number; quantidade: number }[]).map((item) => ({
            produtoId: item.produto.id,
            precoUnitario: item.precoUnitario,
            quantidade: item.quantidade,
          })),
        },
      } as never,
    });
  }

  async excluir(id: number): Promise<void> {
    const pedido = await this.prisma.client.pedido.findUnique({
      where: { id },
      include: { entrega: true },
    });

    if (!pedido) return;
    await this.prisma.client.$transaction([
      this.prisma.client.itemPedido.deleteMany({ where: { pedidoId: id } }),
      this.prisma.client.pedidoEntrega.delete({ where: { pedidoId: id } }),
      this.prisma.client.pedido.delete({ where: { id } }),
    ]);
  }
}
