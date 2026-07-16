'use client'
import CabecalhoCheckout from "@/components/checkout/CabecalhoCheckout"
import FormularioEntrega from "@/components/checkout/pagamento/FormularioEntrega"
import SelecaoFormaPagamento from "@/components/checkout/pagamento/SelecaoFormaPagamento"
import ResumoPagamento from "@/components/checkout/pagamento/ResumoPagamento"
import useCarrinho from "@/data/hooks/useCarrinho"
import usePagamento from "@/data/hooks/usePagamento"

export default function Pagina() {
    const { qtdeItens, valorTotal, valorTotalCheio, parcelamento } = useCarrinho()
    const { entrega, formaPagamento, alterarEntrega, alterarFormaPagamento, finalizarCompra } = usePagamento()

    return (
        <div className="flex flex-col gap-5 container">
            <CabecalhoCheckout passo="pagamento" />
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-5">
                    <FormularioEntrega
                        entrega={entrega}
                        entregaMudou={alterarEntrega}
                    />
                    <SelecaoFormaPagamento
                        formaPagamento={formaPagamento}
                        formaPagamentoMudou={alterarFormaPagamento}
                    />
                </div>
                <ResumoPagamento
                    qtdeItens={qtdeItens}
                    valorTotal={valorTotal}
                    valorTotalCheio={valorTotalCheio}
                    parcelamento={parcelamento}
                    finalizarCompra={finalizarCompra}
                />
            </div>
        </div>
    )
}
