import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('cadastrar')
  cadastrar(
    @Body()
    dados: {
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
    },
  ) {
    return this.auth.cadastrar(dados);
  }

  @Post('login')
  login(@Body() { email, senha }: { email: string; senha: string }) {
    return this.auth.login(email, senha);
  }
}
