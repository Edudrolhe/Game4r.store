'use client'
import ProdutoItem from './ProdutoItem'
import useProdutos from '@/data/hooks/useProdutos'

export default function ListaProdutos() {
    const { produtos } = useProdutos()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center sm:justify-items-stretch">
            {produtos.map((produto) => (
                <ProdutoItem key={produto.id} produto={produto} />
            ))}
        </div>
    )
}
