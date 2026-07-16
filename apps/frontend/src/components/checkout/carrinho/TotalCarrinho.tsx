import { Moeda } from '@game4r/core'
import { IconShoppingCart } from '@tabler/icons-react'

import Link from 'next/link'

export interface TotalCarrinhoProps {
    qtdeItens: number
    valorTotal: number
}

export default function TotalCarrinho(props: TotalCarrinhoProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-7 bg-violet-dark rounded-xl px-4 sm:px-7 py-4 sm:h-24">
            <div className="flex flex-col items-center sm:items-end">
                <span className="text-zinc-400">
                    Total ({props.qtdeItens}{' '}
                    {props.qtdeItens === 1 ? 'item' : 'itens'}):
                </span>
                <span className="text-emerald-500 text-2xl font-semibold">
                    {Moeda.formatar(props.valorTotal ?? 0)}
                </span>
            </div>
            <Link href="/checkout/pagamento" className="button flex items-center justify-center gap-2  bg-pink-600 hover:bg-pink-500 text-white font-semibold">
                <IconShoppingCart size={20} />
                <span>Continuar</span>
            </Link>
        </div>
    )
}
