'use client'
import { createContext, useEffect, useState } from 'react'
import { FiltrarProdutos, Produto } from '@game4r/core'
import useAPI from '../hooks/useAPI'

export interface ContextoProdutosProps {
    produtos: Produto[]
    pesquisa: string
    setPesquisa: (pesquisa: string) => void
    produtoPorId: (id: number) => Produto | null
}

const ContextoProdutos = createContext<ContextoProdutosProps | null>(null)

export function ProvedorProdutos({ children }: { children: React.ReactNode }) {
    const { httpGet } = useAPI()
    const [pesquisa, setPesquisa] = useState<string>('')
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        httpGet<Produto[]>('/produtos').then((produtos) => {
            setProdutos(produtos ?? [])
        }).catch(() => {
            setProdutos([])
        })
    }, [httpGet])

    return (
        <ContextoProdutos.Provider
            value={{
                pesquisa,
                get produtos() {
                    if (!pesquisa) return produtos
                    return new FiltrarProdutos().executar(pesquisa, produtos)
                },
                setPesquisa,
                produtoPorId: (id: number) =>
                    produtos.find((produto) => produto.id === id) ?? null,
            }}
        >
            {children}
        </ContextoProdutos.Provider>
    )
}

export default ContextoProdutos
