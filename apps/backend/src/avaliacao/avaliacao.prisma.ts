import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../db/prisma.provider.js';
import type { Avaliacao } from '../generated/prisma/client.js';

@Injectable()
export class AvaliacaoPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async salvar(avaliacao: Avaliacao): Promise<Avaliacao> {
    return this.prisma.client.avaliacao.upsert({
      where: {
        produtoId_usuarioId: {
          produtoId: avaliacao.produtoId,
          usuarioId: avaliacao.usuarioId,
        },
      },
      update: { nota: avaliacao.nota, comentario: avaliacao.comentario },
      create: {
        produtoId: avaliacao.produtoId,
        usuarioId: avaliacao.usuarioId,
        nota: avaliacao.nota,
        comentario: avaliacao.comentario,
      },
    });
  }

  async obterPorProduto(produtoId: number): Promise<Avaliacao[]> {
    return this.prisma.client.avaliacao.findMany({
      where: { produtoId },
      include: { usuario: { select: { nome: true } } },
      orderBy: { data: 'desc' },
    });
  }

  async resumoPorProduto(produtoId: number): Promise<{
    total: number;
    media: number;
  }> {
    const result = await this.prisma.client.avaliacao.aggregate({
      where: { produtoId },
      _avg: { nota: true },
      _count: true,
    });
    return {
      total: result._count,
      media: result._avg.nota ?? 0,
    };
  }

  async excluir(id: number): Promise<void> {
    await this.prisma.client.avaliacao.delete({ where: { id } });
  }
}
