import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AuthModule } from './auth/auth.module.js';
import { AvaliacaoModule } from './avaliacao/avaliacao.module.js';
import { DbModule } from './db/db.module.js';
import { PedidoModule } from './pedido/pedido.module.js';
import { ProdutoModule } from './produto/produto.module.js';

@Module({
  imports: [AvaliacaoModule, ProdutoModule, PedidoModule, DbModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
