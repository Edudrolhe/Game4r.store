import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { ProdutoModule } from './produto/produto.module.js';
import { PedidoModule } from './pedido/pedido.module.js';
import { DbModule } from './db/db.module.js';

@Module({
  imports: [ProdutoModule, PedidoModule, DbModule],
  controllers: [AppController],
})
export class AppModule {}
