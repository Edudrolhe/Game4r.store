import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import Especificacoes from '../../../components/produto/Especificacoes'
import BannerCompra from '../../../components/produto/BannerCompra'
import Cores from '@/data/constants/Cores'
import MedidorDePreco from '@/components/produto/MedidorDePreco'
import AvaliacoesUsuarios from '@/components/produto/AvaliacoesUsuarios'
import useProdutos from '@/data/hooks/useProdutos'

export default function ProdutoDetalhes() {
    const { id } = useLocalSearchParams<{ id: string }>()
    const { produtos } = useProdutos()
    const produto = produtos.find((p) => p.id === Number(id))
    if (!produto) return null

    return (
        <ScrollView style={styles.container}>
            <View style={styles.produtoInfo}>
                <Text style={styles.titulo}>{produto.nome}</Text>
                <View style={styles.imagemBackground}>
                    <Image src={produto.imagem} style={styles.imagem} />
                </View>
                <Especificacoes produto={produto} />
            </View>
            <BannerCompra produto={produto} />
            <MedidorDePreco produto={produto} />
            <AvaliacoesUsuarios produto={produto} />
            <View style={{ height: 50 }} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingVertical: 20, gap: 10, backgroundColor: Cores.BG_PRIMARIO },
    produtoInfo: { backgroundColor: Cores.BG_SECUNDARIO, padding: 20, gap: 20 },
    titulo: { color: '#FFFFFF', fontSize: 18, fontWeight: '600', marginBottom: 5 },
    imagemBackground: {
        alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10, padding: 20, height: 230,
    },
    imagem: { width: '80%', height: '100%', borderRadius: 10 },
})
