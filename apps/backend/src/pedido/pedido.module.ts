import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { DbModule } from '../db/db.module.js';
import { PedidoController } from './pedido.controller.js';
import { PedidoPrisma } from './pedido.prisma.js';

@Module({
  imports: [DbModule, AuthModule],
  controllers: [PedidoController],
  providers: [PedidoPrisma],
})
export class PedidoModule {}
