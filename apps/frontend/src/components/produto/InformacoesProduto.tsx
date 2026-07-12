import type { Produto } from '@game4r/core'
import Image from 'next/image'

export interface InformacoesProdutoProps {
    produto: Produto
}

export default function InformacoesProduto(props: InformacoesProdutoProps) {
    const { produto } = props

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
            <div className="relative w-full lg:w-125 h-64 sm:h-80 lg:h-125">
                <Image
                    src={produto.imagem}
                    fill
                    className="object-contain drop-shadow-2xl"
                    alt={produto.nome}
                />
            </div>
            <div className="flex-1 flex flex-col gap-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>{produto.descricao}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(produto.especificacoes)
                        .filter(([chave]) => chave !== 'descricao' && chave !== 'destaque')
                        .map(([chave, valor]) => (
                            <div key={chave} className="flex gap-2 border-b border-hairline pb-1">
                                <span className="text-steel capitalize">{chave}:</span>
                                <span className="text-white">{String(valor)}</span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
