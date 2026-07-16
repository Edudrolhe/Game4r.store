import { IconShoppingCart } from '@tabler/icons-react'

export interface IconeCarrinhoProps {
    qtdeItens: number
}

export default function IconeCarrinho(props: IconeCarrinhoProps) {
    return (
        <div className="flex justify-center items-center rounded-full w-12 h-12 sm:w-14 sm:h-14 bg-violet-dark relative">
            <IconShoppingCart size={24} stroke={1.3} className="sm:size-7.5 text-white" />
            <div
                key={props.qtdeItens}
                className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-semibold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center animate-ping-once"
            >
                {props.qtdeItens ?? 0}
            </div>
        </div>
    )
}
