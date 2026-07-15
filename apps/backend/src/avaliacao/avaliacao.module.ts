import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { DbModule } from '../db/db.module.js';
import { AvaliacaoController } from './avaliacao.controller.js';
import { AvaliacaoPrisma } from './avaliacao.prisma.js';

@Module({
  imports: [DbModule, AuthModule],
  controllers: [AvaliacaoController],
  providers: [AvaliacaoPrisma],
})
export class AvaliacaoModule {}
