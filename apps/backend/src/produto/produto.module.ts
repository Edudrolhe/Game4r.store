import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller.js';
import { DbModule } from '../db/db.module.js';
import { ProdutoPrisma } from './produto.prisma.js';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
  providers: [ProdutoPrisma],
})
export class ProdutoModule {}
