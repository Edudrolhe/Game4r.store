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
import type { Pedido } from '../generated/prisma/client.js';
import { PedidoPrisma } from './pedido.prisma.js';
import { AuthGuard } from '../auth/auth.guard.js';
import { Usuario } from '../auth/usuario.decorator.js';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly repo: PedidoPrisma) {}

  @Post()
  @UseGuards(AuthGuard)
  salvar(@Body() pedido: unknown, @Usuario() usuario: { sub: number }): Promise<Pedido> {
    return this.repo.salvar(pedido as never, usuario.sub);
  }

  @Get()
  @UseGuards(AuthGuard)
  obterTodos(@Usuario() usuario: { sub: number }): Promise<Pedido[]> {
    return this.repo.obter(usuario.sub);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  obterPorId(@Param('id', ParseIntPipe) id: number, @Usuario() usuario: { sub: number }): Promise<Pedido | null> {
    return this.repo.obterPorId(id, usuario.sub);
  }

  @Delete(':id')
  excluir(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.repo.excluir(id);
  }
}
