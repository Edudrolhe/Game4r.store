'use client'
import {
    FormaPagamento,
    ItemCarrinho,
    ItemPedido,
    Pedido,
    PedidoEntrega,
    Staus,
} from '@game4r/core'
import { createContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import useLocalStorage from '../hooks/useLocalStorage'
import useCarrinho from '../hooks/useCarrinho'
import useAPI from '../hooks/useAPI'

export interface ContextoPagamentoProps {
    formaPagamento: FormaPagamento
    entrega: Partial<PedidoEntrega>
    alterarFormaPagamento: (formaPagamento: FormaPagamento) => void
    alterarEntrega: (entrega: Partial<PedidoEntrega>) => void
    finalizarCompra: () => void
}

const ContextoPagamento = createContext<ContextoPagamentoProps | null>(null)

export function ProvedorPagamento({ children }: { children: React.ReactNode }) {
    const { httpPost } = useAPI()
    const { itens, valorTotal, limparCarrinho } = useCarrinho()
    const { salvarItem, obterItem } = useLocalStorage()
    const router = useRouter()

    const [formaPagamento, setFormaPagamento] = useState<FormaPagamento>(
        () => obterItem<FormaPagamento>('formaPagamento') ?? FormaPagamento.PIX,
    )
    const [entrega, setEntrega] = useState<Partial<PedidoEntrega>>(
        () => obterItem<Partial<PedidoEntrega>>('entrega') ?? {},
    )

    function alterarFormaPagamento(formaPagamento: FormaPagamento) {
        salvarItem('formaPagamento', formaPagamento)
        setFormaPagamento(formaPagamento)
    }

    function alterarEntrega(entrega: Partial<PedidoEntrega>) {
        salvarItem('entrega', entrega)
        setEntrega(entrega)
    }

    async function finalizarCompra() {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
        if (!token) {
            router.push('/login')
            return
        }

        try {
            const pedido = {
                data: new Date().toISOString(),
                formaPagamento,
                valorTotal,
                entrega: entrega as PedidoEntrega,
                status: Staus.PENDENTE,
                itens: itens.map(
                    (item: ItemCarrinho) =>
                        ({
                            produto: item.produto,
                            quantidade: item.quantidade,
                            precoUnitario: item.produto.precoPromocional,
                        }) as ItemPedido,
                ),
            }

            await httpPost<Pedido>('/pedidos', pedido)
            limparCarrinho()
            router.push('/checkout/sucesso')
        } catch {
            localStorage.removeItem('token')
            router.push('/login')
        }
    }

    return (
        <ContextoPagamento.Provider
            value={{
                entrega,
                formaPagamento,
                alterarEntrega,
                alterarFormaPagamento,
                finalizarCompra,
            }}
        >
            {children}
        </ContextoPagamento.Provider>
    )
}

export default ContextoPagamento
