import { Moeda, Produto } from '@game4r/core'
import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import NotaReview from '../shared/NotaReview'
import useCarrinho from '../../data/hooks/useCarrinho'
import useParcelamento from '../../data/hooks/useParcelamento'
import Cores from '@/data/constants/Cores'

export interface ProdutoItemProps {
    produto: Produto
    produtoSelecionado?: (produto: Produto) => void
}

const LARGURA = Dimensions.get('window').width
const CARD_MARGIN = 20
const CARD_WIDTH = LARGURA - CARD_MARGIN * 2

export default function ProdutoItem(props: ProdutoItemProps) {
    const { adicionarItem } = useCarrinho()
    const parcelamento = useParcelamento(props.produto.precoPromocional)
    const destaque = props.produto.especificacoes?.destaque

    return (
        <View style={styles.container}>
            <Pressable onPress={() => props.produtoSelecionado?.(props.produto)}>
                <View style={styles.imageContainer}>
                    <Image src={props.produto.imagem} style={styles.imagem} />
                    <View style={styles.reviewBadge}>
                        <NotaReview nota={props.produto.nota} />
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.nome} numberOfLines={1}>{props.produto.nome}</Text>
                    {destaque ? (
                        <Text style={styles.destaque} numberOfLines={1}>{destaque}</Text>
                    ) : null}
                    <View style={styles.spacer} />
                    <Text style={styles.precoCheio}>
                        de {Moeda.formatar(props.produto.precoBase)}
                    </Text>
                    <Text style={styles.preco}>
                        por {Moeda.formatar(props.produto.precoPromocional)}
                    </Text>
                </View>
            </Pressable>
            <Pressable style={styles.botao} onPress={() => adicionarItem(props.produto)}>
                <Ionicons name="cart-outline" size={20} color="#FFF" />
                <Text style={styles.botaoTexto}>Adicionar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: CARD_WIDTH,
        alignSelf: 'center',
        backgroundColor: '#1A0D29',
        borderRadius: 14,
        overflow: 'hidden',
        marginVertical: 8,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.06)',
    },
    imageContainer: {
        width: '100%',
        height: 180,
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'relative',
    },
    imagem: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    reviewBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    infoContainer: {
        padding: 16,
        gap: 4,
    },
    nome: {
        fontSize: 17,
        fontWeight: '700',
        color: '#FFF',
    },
    destaque: {
        fontSize: 13,
        color: '#a1a1aa',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.08)',
        borderStyle: 'dashed',
        paddingBottom: 6,
    },
    spacer: {
        height: 4,
    },
    precoCheio: {
        fontSize: 13,
        color: '#71717a',
        textDecorationLine: 'line-through',
    },
    preco: {
        fontSize: 22,
        fontWeight: '700',
        color: '#34d399',
    },
    botao: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Cores.PRIMARIA,
        paddingVertical: 14,
        gap: 8,
    },
    botaoTexto: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '600',
    },
})
