import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaProvider } from '../db/prisma.provider.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaProvider,
    private readonly jwt: JwtService,
  ) {}

  async cadastrar(dados: {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    endereco: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  }) {
    const senhaHash = await bcrypt.hash(dados.senha, 10);
    const usuario = await this.prisma.client.usuario.create({
      data: { ...dados, senha: senhaHash },
    });
    return this.gerarToken(usuario);
  }

  async login(email: string, senha: string) {
    const usuario = await this.prisma.client.usuario.findUnique({
      where: { email },
    });
    if (!usuario) throw new UnauthorizedException('Email ou senha inválidos');
    const valida = await bcrypt.compare(senha, usuario.senha);
    if (!valida) throw new UnauthorizedException('Email ou senha inválidos');
    return this.gerarToken(usuario);
  }

  private gerarToken(usuario: { id: number; nome: string; email: string }) {
    const payload = {
      sub: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    };
    return { token: this.jwt.sign(payload), usuario };
  }
}
