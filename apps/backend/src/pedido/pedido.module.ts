import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller.js';

@Module({
  controllers: [PedidoController],
})
export class PedidoModule {}
