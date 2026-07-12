import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProdutoService } from './produto.service.js';
import type { Produto } from '../generated/prisma/client.js';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  async findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Produto | null> {
    return this.produtoService.findById(id);
  }
}
