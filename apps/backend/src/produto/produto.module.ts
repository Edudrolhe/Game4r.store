import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module.js';
import { ProdutoController } from './produto.controller.js';
import { ProdutoService } from './produto.service.js';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
