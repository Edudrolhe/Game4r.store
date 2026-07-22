import { StyleSheet, SafeAreaView, ScrollView, Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Moeda, ItemCarrinho } from '@game4r/core'
import CabecalhoCheckout from '../../components/checkout/CabecalhoCheckout'
import CarrinhoItem from '../../components/checkout/carrinho/CarrinhoItem'
import CarrinhoVazio from '../../components/checkout/carrinho/CarrinhoVazio'
import Cores from '@/data/constants/Cores'
import useCarrinho from '@/data/hooks/useCarrinho'

export default function Carrinho() {
    const { itens, qtdeItens, valorTotal, adicionarItem, removerItem, removerProduto } = useCarrinho()

    return (
        <SafeAreaView style={styles.container}>
            <CabecalhoCheckout passo="carrinho" />
            <ScrollView contentContainerStyle={{ paddingVertical: 10, width: '100%', flexGrow: 1 }}>
                {itens.length === 0 && <CarrinhoVazio />}
                {itens.map((item: ItemCarrinho) => (
                    <CarrinhoItem
                        key={item.produto.id}
                        item={item}
                        adicionarItem={() => adicionarItem(item.produto)}
                        removerItem={() => removerItem(item.produto)}
                        removerProduto={() => removerProduto(item.produto)}
                    />
                ))}
            </ScrollView>
            {qtdeItens > 0 && (
                <View style={styles.footer}>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalLabel}>Total ({qtdeItens} {qtdeItens === 1 ? 'item' : 'itens'}):</Text>
                        <Text style={styles.totalValor}>{Moeda.formatar(valorTotal)}</Text>
                    </View>
                    <Pressable style={styles.botao} onPress={() => router.push('/pagamento')}>
                        <Ionicons name="card-outline" size={22} color="#FFF" />
                        <Text style={styles.botaoTexto}>Continuar</Text>
                    </Pressable>
                </View>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0E001D', width: '100%' },
    footer: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#1A0D29',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.08)',
        gap: 12,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    totalLabel: { color: '#a1a1aa', fontSize: 15 },
    totalValor: { color: '#34d399', fontSize: 22, fontWeight: '700' },
    botao: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        backgroundColor: Cores.SECUNDARIA, borderRadius: 9999,
        height: 48, gap: 8,
    },
    botaoTexto: { color: '#FFF', fontSize: 16, fontWeight: '600' },
})
