'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiFetch } from '@/data/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro('');
    try {
      const data = await apiFetch<{ token: string; usuario: { nome: string } }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, senha }),
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('usuarioNome', data.usuario.nome);
      router.push('/');
    } catch (err) {
      setErro(err instanceof Error ? err.message : 'Erro ao fazer login');
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full max-w-md bg-violet-dark rounded-xl p-8"
      >
        <h1 className="text-2xl font-bold text-center text-white">Login</h1>

        {erro && (
          <p className="text-red-400 text-sm text-center">{erro}</p>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-zinc-400 text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black/30 border border-zinc-700 rounded-lg px-4 py-2 text-white outline-none focus:border-violet-500"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-zinc-400 text-sm">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="bg-black/30 border border-zinc-700 rounded-lg px-4 py-2 text-white outline-none focus:border-violet-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg px-4 py-3 transition-colors"
        >
          Entrar
        </button>

        <p className="text-zinc-500 text-sm text-center">
          Não tem conta?{' '}
          <Link href="/cadastro" className="text-violet-400 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  );
}
