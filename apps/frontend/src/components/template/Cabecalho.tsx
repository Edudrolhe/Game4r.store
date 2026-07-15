'use client'

import { useEffect, useState } from 'react'
import Logo from '../shared/Logo'
import IconeCarrinho from '../shared/IconeCarrinho'
import useCarrinho from '@/src/data/hooks/useCarrinho'
import Link from 'next/link'
import { IconUser, IconLogout } from '@tabler/icons-react'

export default function Cabecalho() {
    const [nome, setNome] = useState<string | null>(null)

    useEffect(() => {
        const nomeSalvo = localStorage.getItem('usuarioNome')
        if (nomeSalvo) Promise.resolve().then(() => setNome(nomeSalvo))
    }, [])
    const { qtdeItens } = useCarrinho()

    function sair() {
        localStorage.removeItem('token')
        localStorage.removeItem('usuarioNome')
        setNome(null)
    }

    return (
        <div
            className="flex flex-col h-16 sm:h-20"
            style={{
                background: 'linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)',
            }}
        >
            <div className="flex-1 container flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex gap-2 items-center">
                        {nome ? (
                            <>
                                <span className="text-zinc-300 text-sm hidden sm:block">{nome}</span>
                                <button onClick={sair} className="flex justify-center items-center rounded-full w-12 h-12 sm:w-14 sm:h-14 bg-violet-dark cursor-pointer">
                                    <IconLogout size={24} stroke={1.3} className="sm:size-7.5 text-white" />
                                </button>
                            </>
                        ) : (
                            <Link href="/login">
                                <div className="flex justify-center items-center rounded-full w-12 h-12 sm:w-14 sm:h-14 bg-violet-dark">
                                    <IconUser size={24} stroke={1.3} className="sm:size-7.5 text-white" />
                                </div>
                            </Link>
                        )}
                        <Link href="/checkout/carrinho">
                            <IconeCarrinho qtdeItens={qtdeItens} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-px bg-linear-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
        </div>
    )
}
