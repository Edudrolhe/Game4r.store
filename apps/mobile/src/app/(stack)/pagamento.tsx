import { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, ScrollView, Alert } from 'react-native'
import { router } from 'expo-router'
import CabecalhoCheckout from '../../components/checkout/CabecalhoCheckout'
import FormularioEntrega from '../../components/checkout/pagamento/FormularioEntrega'
import ResumoPagamento from '../../components/checkout/pagamento/ResumoPagamento'
import SelecaoFormaPagamento from '../../components/checkout/pagamento/SelecaoFormaPagamento'
import useCarrinho from '@/data/hooks/useCarrinho'
import usePagamento from '@/data/hooks/usePagamento'

export default function Pagamento() {
    const { parcelamento, qtdeItens, valorTotal, valorTotalCheio } = useCarrinho()
    const { entrega, formaPagamento, alterarEntrega, alterarFormaPagamento, finalizarCompra } =
        usePagamento()
    const [finalizando, setFinalizando] = useState(false)

    async function handleFinalizar() {
        setFinalizando(true)
        try {
            await finalizarCompra()
            router.replace('/sucesso')
        } catch (e: any) {
            Alert.alert('Erro', e?.message ?? 'Erro ao finalizar compra')
        } finally {
            setFinalizando(false)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <CabecalhoCheckout passo="pagamento" />
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <Text style={styles.titulo}>Forma de Pagamento</Text>
                <SelecaoFormaPagamento
                    formaPagamento={formaPagamento}
                    formaPagamentoMudou={alterarFormaPagamento}
                />
                <Text style={styles.titulo}>Dados da Entrega</Text>
                <FormularioEntrega entrega={entrega} entregaMudou={alterarEntrega} />
            </ScrollView>
            <ResumoPagamento
                qtdeItens={qtdeItens}
                valorTotal={valorTotal}
                valorTotalCheio={valorTotalCheio}
                parcelamento={parcelamento}
                finalizarCompra={handleFinalizar}
                finalizando={finalizando}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0E001D' },
    containerScroll: { padding: 20, gap: 24, paddingBottom: 40 },
    titulo: { fontSize: 18, fontWeight: '700', color: '#FFF', marginTop: 8 },
})
