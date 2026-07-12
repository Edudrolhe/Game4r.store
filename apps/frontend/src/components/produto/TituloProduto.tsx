import type { Produto } from '@game4r/core'
import Tag from '../shared/Tag'
import { IconTag } from '@tabler/icons-react'

export interface TituloProdutoProps {
    produto: Produto
}

export default function TituloProduto(props: TituloProdutoProps) {
    const { produto } = props
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs sm:text-sm text-steel uppercase tracking-wide">
                    {produto.marca} / {produto.modelo}
                </span>
                {produto.tags.length > 0 && (
                    <div className="flex gap-2">
                        {produto.tags.map((tag) => (
                            <Tag key={tag} label={tag} icone={IconTag} />
                        ))}
                    </div>
                )}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {produto.nome}
            </h1>
        </div>
    )
}
