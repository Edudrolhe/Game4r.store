import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../db/prisma.provider.js';
import type { Produto } from '../generated/prisma/client.js';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaProvider) {}

  async findAll(): Promise<Produto[]> {
    return this.prisma.client.produto.findMany();
  }

  async findById(id: number): Promise<Produto | null> {
    return this.prisma.client.produto.findUnique({ where: { id } });
  }
}
