'use client'

import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { CalcularParcelamento, Carrinho, ItemCarrinho, Parcelamento, Produto } from '@game4r/core'

export interface ContextoCarrinhoProps {
    itens: ItemCarrinho[]
    qtdeItens: number
    valorTotalCheio: number
    valorTotal: number
    parcelamento: Parcelamento
    adicionarItem: (produto: Produto) => void
    removerItem: (produto: Produto) => void
    removerProduto: (produto: Produto) => void
    limparCarrinho: () => void
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps | null>(null)

export function ProvedorCarrinho({ children }: { children: React.ReactNode }) {
    const { salvarItem, obterItem } = useLocalStorage()
    const [carrinho, setCarrinho] = useState<Carrinho>(new Carrinho())

    useEffect(() => {
        const itensSalvos = obterItem<ItemCarrinho[]>('carrinho')
        if (itensSalvos) Promise.resolve().then(() => setCarrinho(new Carrinho(itensSalvos)))
    }, [obterItem])

    function adicionarItem(produto: Produto) {
        alterarCarrinho(carrinho.adicionarItem(produto))
    }

    function removerItem(produto: Produto) {
        alterarCarrinho(carrinho.removerItem(produto))
    }

    function removerProduto(produto: Produto) {
        alterarCarrinho(carrinho.removerProduto(produto))
    }

    function limparCarrinho() {
        alterarCarrinho(carrinho.limpar())
    }

    function alterarCarrinho(carrinho: Carrinho) {
        salvarItem('carrinho', carrinho.itens)
        setCarrinho(carrinho)
    }

    return (
        <ContextoCarrinho.Provider
            value={{
                itens: carrinho.itens,
                qtdeItens: carrinho.qtdeItens,
                valorTotal: carrinho.valorTotal,
                valorTotalCheio: carrinho.valorTotalCheio,
                parcelamento: new CalcularParcelamento().executar(
                    carrinho.valorTotal,
                ),
                adicionarItem,
                removerItem,
                removerProduto,
                limparCarrinho,
            }}
        >
            {children}
        </ContextoCarrinho.Provider>
    )
}

export default ContextoCarrinho
