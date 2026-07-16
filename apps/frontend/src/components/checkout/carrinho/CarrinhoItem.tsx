import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react'
import { Moeda, ItemCarrinho as ItemCarrinhoModel } from '@game4r/core'
import Image from 'next/image'
import useParcelamento from '@/data/hooks/useParcelamento'

export interface CarrinhoItemProps {
    item: ItemCarrinhoModel
    adicionarItem: () => void
    removerItem: () => void
    removerProduto: () => void
}

export default function CarrinhoItem(props: CarrinhoItemProps) {
    const { item } = props
    const { produto, quantidade } = item
    const parcelamento = useParcelamento(produto.precoPromocional)

    return (
        <div className="flex flex-col sm:flex-row items-center bg-violet-dark px-4 sm:px-8 py-4 sm:py-0 rounded-xl gap-4 sm:gap-8 lg:gap-16 overflow-hidden">
            <div className="flex items-center gap-4 w-full sm:w-auto">
                <Image
                    src={produto.imagem}
                    width={100}
                    height={0}
                    className="sm:w-50 sm:max-w-none"
                    alt="Imagem Produto"
                />
                <span className="text-lg sm:text-xl flex-1 sm:hidden text-white">
                    {produto.nome}
                </span>
            </div>
            <span className="hidden sm:flex flex-col h-28 flex-1 text-xl text-white">
                {produto.nome}
            </span>
            <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-4">
                <span className="text-sm text-zinc-400 hidden sm:block">Quantidade</span>
                <div className="flex items-center border border-zinc-300 rounded-lg">
                    <button
                        disabled={quantidade === 1}
                        className={`px-2 py-0.5 text-emerald-500 ${quantidade === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                        onClick={props.removerItem}
                    >
                        <IconMinus size={15} />
                    </button>
                    <span className="border-x border-zinc-50 text-lg px-4 py-0.5 text-white">
                        {quantidade}
                    </span>
                    <button
                        className="px-2 py-0.5 text-emerald-500 active:scale-75 transition-transform duration-100"
                        onClick={props.adicionarItem}
                    >
                        <IconPlus size={15} />
                    </button>
                </div>
                <button
                    className="flex items-center gap-1 text-pink-600 select-none"
                    onClick={props.removerProduto}
                >
                    <IconTrash size={20} />
                    <span className="text-sm">Remover</span>
                </button>
            </div>
            <div className="flex flex-col items-end w-full sm:w-auto">
                <span className="line-through text-zinc-400 text-sm">
                    de {Moeda.formatar(produto.precoBase)}
                </span>
                <div className="flex gap-1.5 items-baseline">
                    <span className="text-sm text-white">por</span>
                    <span className="text-emerald-500 text-xl font-semibold">
                        {Moeda.formatar(produto.precoPromocional)}
                    </span>
                </div>
                <span className="text-xs text-zinc-300">
                    Preço à vista no PIX/Boleto
                </span>
                <span className="text-sm text-zinc-300 mt-4">
                    Parcelamento no Cartão
                </span>
                <div className="text-sm text-zinc-300">
                    em até{' '}
                    <span className="text-white font-semibold">
                        {parcelamento.qtdeParcelas}x
                    </span>{' '}
                    de{' '}
                    <span className="text-white font-semibold">
                        {Moeda.formatar(parcelamento.valorParcela)}
                    </span>
                </div>
            </div>
        </div>
    )
}
