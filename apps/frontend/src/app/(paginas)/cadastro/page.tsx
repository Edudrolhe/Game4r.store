'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiFetch } from '@/data/api';

export default function CadastroPage() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    cep: '',
  });
  const [erro, setErro] = useState('');
  const router = useRouter();

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro('');
    try {
      const data = await apiFetch<{ token: string; usuario: { nome: string } }>('/auth/cadastrar', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('usuarioNome', data.usuario.nome);
      router.push('/');
    } catch (err) {
      setErro(err instanceof Error ? err.message : 'Erro ao cadastrar');
    }
  }

  const fields = [
    { label: 'Nome', field: 'nome', type: 'text' },
    { label: 'Email', field: 'email', type: 'email' },
    { label: 'Senha', field: 'senha', type: 'password' },
    { label: 'Telefone', field: 'telefone', type: 'text' },
    { label: 'Endereço', field: 'endereco', type: 'text' },
    { label: 'Número', field: 'numero', type: 'text' },
    { label: 'Bairro', field: 'bairro', type: 'text' },
    { label: 'Cidade', field: 'cidade', type: 'text' },
    { label: 'Estado', field: 'estado', type: 'text' },
    { label: 'CEP', field: 'cep', type: 'text' },
  ];

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-lg bg-violet-dark rounded-xl p-8"
      >
        <h1 className="text-2xl font-bold text-center text-white">Cadastro</h1>

        {erro && (
          <p className="text-red-400 text-sm text-center">{erro}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fields.map(({ label, field, type }) => (
            <div key={field} className="flex flex-col gap-1">
              <label className="text-zinc-400 text-sm">{label}</label>
              <input
                type={type}
                value={(form as any)[field]}
                onChange={(e) => update(field, e.target.value)}
                className="bg-black/30 border border-zinc-700 rounded-lg px-4 py-2 text-white outline-none focus:border-violet-500"
                required
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg px-4 py-3 transition-colors mt-2"
        >
          Cadastrar
        </button>

        <p className="text-zinc-500 text-sm text-center">
          Já tem conta?{' '}
          <Link href="/login" className="text-violet-400 hover:underline">
            Faça login
          </Link>
        </p>
      </form>
    </div>
  );
}
