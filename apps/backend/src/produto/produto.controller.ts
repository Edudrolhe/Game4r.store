import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import type { Produto } from '../generated/prisma/client.js';
import { ProdutoPrisma } from './produto.prisma.js';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly repo: ProdutoPrisma) {}

  @Post()
  salvar(@Body() produto: Produto): Promise<Produto> {
    return this.repo.salvar(produto);
  }

  @Get()
  obterTodos(): Promise<Produto[]> {
    return this.repo.obterTodos();
  }

  @Get(':id')
  obterPorId(@Param('id', ParseIntPipe) id: number): Promise<Produto | null> {
    return this.repo.obterPorId(id);
  }

  @Delete(':id')
  excluir(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.repo.excluir(id);
  }
}
