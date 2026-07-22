import { createContext, useCallback, useEffect, useState } from 'react'
import { FiltrarProdutos, Produto, produtos as produtosFallback } from '@game4r/core'
import useAPI from '../hooks/useAPI'

export interface ContextoProdutosProps {
    produtos: Produto[]
    pesquisa: string
    setPesquisa: (pesquisa: string) => void
    produtoPorId: (id: number) => Produto | null
}

const ContextoProdutos = createContext<ContextoProdutosProps>({} as any)

export function ProvedorProdutos(props: any) {
    const { httpGet } = useAPI()
    const [pesquisa, setPesquisa] = useState<string>('')
    const [produtos, setProdutos] = useState<Produto[]>([])

    const carregarProdutos = useCallback(async () => {
        try {
            const dados = await httpGet('/produtos')
            if (Array.isArray(dados) && dados.length > 0) {
                setProdutos(dados)
                return
            }
        } catch {}
        setProdutos(produtosFallback as Produto[])
    }, [httpGet])

    useEffect(() => {
        carregarProdutos()
    }, [carregarProdutos])

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
            {props.children}
        </ContextoProdutos.Provider>
    )
}

export default ContextoProdutos
