'use client'
import { Moeda, CalcularParcelamento, QTDE_MAX_PARCELAS } from '@game4r/core'
import type { Produto } from '@game4r/core'
import { IconShoppingCartPlus } from '@tabler/icons-react'

export interface BannerCompraProps {
    produto: Produto
} 

export default function BannerCompra(props: BannerCompraProps) {
    const { produto } = props
    const parcelamento = new CalcularParcelamento().executar(
        produto.precoPromocional,
        QTDE_MAX_PARCELAS 
    )

    return (
        <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/5 border border-hairline rounded-xl p-6 sm:p-8">
            <div className="flex-1 flex flex-col gap-2 text-center sm:text-left">
                <span className="text-sm text-stone line-through">
                    de {Moeda.formatar(produto.precoBase)}
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-brand-green-dark">
                    {Moeda.formatar(produto.precoPromocional)} 
                </span>
                <span className="text-sm text-steel">
                    em até {parcelamento.qtdeParcelas}x de{' '}
                    <strong className="text-white">
                        {Moeda.formatar(parcelamento.valorParcela)}
                    </strong>{' '}
                    sem juros
                </span>
            </div>
            <button
                className="btn-primary gap-2 text-base py-3 px-8 w-full sm:w-auto"
                onClick={() => console.log('Adicionar ao carrinho', produto.id)}
            >
                <IconShoppingCartPlus size={24} />
                <span>Adicionar ao Carrinho</span>
            </button>
        </div>
    )
}
