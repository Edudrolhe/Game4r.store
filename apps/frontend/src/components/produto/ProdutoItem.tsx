'use client'
import { Moeda, Produto } from '@game4r/core'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import NotaReview from '../shared/NotaReview'
import useCarrinho from '@/data/hooks/useCarrinho'

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    const { adicionarItem } = useCarrinho()

    return (
        <Link
            href={`/produtos/${produto.id}`}
            className="flex flex-col bg-white border border-hairline rounded-xl relative max-w-87.5 w-full"
        >
            <div className="absolute flex justify-end top-2.5 right-2.5">
                <NotaReview nota={produto.nota} />
            </div>
            <div className="w-full h-40 sm:h-48 relative">
                <Image
                    src={produto.imagem}
                    fill
                    className="object-contain drop-shadow-lg"
                    alt="Imagem do Produto"
                />
            </div>
            <div className="flex-1 flex flex-col gap-3 p-5 border-t border-hairline">
                <span className="text-lg font-semibold text-ink">{produto.nome}</span>
                <div className="self-start text-sm text-steel border-b border-dashed border-hairline-strong">
                    {produto.especificacoes.destaque}
                </div>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-stone line-through">
                        de {Moeda.formatar(produto.precoBase)}
                    </span>
                    <span className="text-xl font-semibold text-brand-green-dark">
                        por {Moeda.formatar(produto.precoPromocional)}
                    </span>
                </div>
                <button
                    className="btn-primary gap-2 active:scale-95 transition-transform duration-100"
                    onClick={(e) => {
                        e.preventDefault()
                        adicionarItem(produto)
                    }}
                >
                    <IconShoppingCartPlus size={20} />
                    <span>Adicionar</span>
                </button>
            </div>
        </Link>
    )
}
