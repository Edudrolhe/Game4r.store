import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard.js';
import { Usuario } from '../auth/usuario.decorator.js';
import type { Avaliacao } from '../generated/prisma/client.js';
import { AvaliacaoPrisma } from './avaliacao.prisma.js';

@Controller('avaliacoes')
export class AvaliacaoController {
  constructor(private readonly repo: AvaliacaoPrisma) {}

  @UseGuards(AuthGuard)
  @Post()
  salvar(
    @Body() body: { produtoId: number; nota: number; comentario: string },
    @Usuario() usuario: { id: number },
  ): Promise<Avaliacao> {
    return this.repo.salvar({
      ...body,
      usuarioId: usuario.id,
    } as Avaliacao);
  }

  @Get('produto/:produtoId')
  obterPorProduto(
    @Param('produtoId', ParseIntPipe) produtoId: number,
  ): Promise<Avaliacao[]> {
    return this.repo.obterPorProduto(produtoId);
  }

  @Get('produto/:produtoId/resumo')
  resumoPorProduto(
    @Param('produtoId', ParseIntPipe) produtoId: number,
  ): Promise<{ total: number; media: number }> {
    return this.repo.resumoPorProduto(produtoId);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  excluir(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.repo.excluir(id);
  }
}
