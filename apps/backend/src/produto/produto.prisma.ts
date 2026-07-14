import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../db/prisma.provider.js';
import type { Produto, Prisma } from '../generated/prisma/client.js';

@Injectable()
export class ProdutoPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  async salvar(produto: Produto): Promise<Produto> {
    return this.prisma.client.produto.upsert({
      where: { id: produto.id ?? -1 },
      update: produto as unknown as Prisma.ProdutoUncheckedUpdateInput,
      create: produto as unknown as Prisma.ProdutoUncheckedCreateInput,
    });
  }

  async obterTodos(): Promise<Produto[]> {
    return this.prisma.client.produto.findMany({ orderBy: { id: 'desc' } });
  }

  async obterPorId(id: number): Promise<Produto | null> {
    return this.prisma.client.produto.findUnique({ where: { id } });
  }

  async excluir(id: number): Promise<void> {
    await this.prisma.client.produto.delete({ where: { id } });
  }
}
