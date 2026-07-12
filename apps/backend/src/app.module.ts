import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { DbModule } from './db/db.module';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoController } from './produto/produto.controller';

@Module({
  imports: [ProdutoModule, PedidoModule, DbModule],
  controllers: [AppController, ProdutoController],
})
export class AppModule {}
