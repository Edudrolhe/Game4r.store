'use client'
import { IconSearch } from '@tabler/icons-react'
import useProdutos from '@/src/data/hooks/useProdutos'

export interface FiltroProdutoProps {
    className?: string
}

export default function FiltroProduto(props: FiltroProdutoProps) {
    const { pesquisa, setPesquisa } = useProdutos()
    return (
        <div>
            <div
                className={`
                    flex gap-2 bg-violet-dark border border-white/20 
                    rounded-full overflow-hidden ${props.className ?? ''}
                `}
            >
                <input
                    value={pesquisa ?? ''}
                    onChange={(e) => setPesquisa(e.target.value)}
                    placeholder="O que você procura?"
                    className="flex-1 bg-transparent outline-none px-6 py-3 text-zinc-400 placeholder-zinc-500"
                />
                <div className="flex justify-center items-center bg-emerald-500 px-4">
                    <IconSearch size={24} className="text-white" />
                </div>
            </div>
        </div>
    )
}
