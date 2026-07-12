import { produtos } from '@game4r/core'
import type { Produto } from '@game4r/core'
import ProdutoItem from './ProdutoItem'

export default function ListaProdutos() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center sm:justify-items-stretch">
            {produtos.map((produto: Produto) => (
                <ProdutoItem key={produto.id} produto={produto} />
            ))}
        </div>
    )
}
