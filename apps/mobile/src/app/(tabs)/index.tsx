import { StyleSheet, ScrollView, SafeAreaView, TextInput, View, Text } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import ProdutoItem from '../../components/produto/ProdutoItem'
import useProdutos from '@/data/hooks/useProdutos'
import Cores from '@/data/constants/Cores'

export default function Inicio() {
    const { produtos, pesquisa, setPesquisa } = useProdutos()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="O que você procura?"
                        placeholderTextColor="#71717a"
                        value={pesquisa}
                        onChangeText={setPesquisa}
                    />
                    <View style={styles.searchIcon}>
                        <Ionicons name="search" size={22} color="#FFF" />
                    </View>
                </View>
            </View>
            <ScrollView
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            >
                {produtos.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Ionicons name="search-outline" size={64} color="#333" />
                        <Text style={styles.emptyText}>Nenhum produto encontrado</Text>
                    </View>
                ) : (
                    produtos.map((produto) => (
                        <ProdutoItem
                            key={produto.id}
                            produto={produto}
                            produtoSelecionado={() => router.push(`/produto/${produto.id}`)}
                        />
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0E001D' },
    header: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 16,
        backgroundColor: '#14002D',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(120,17,245,0.2)',
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#1A0D29',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        borderRadius: 9999,
        overflow: 'hidden',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        color: '#e4e4e7',
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 15,
    },
    searchIcon: {
        backgroundColor: Cores.TEXTO_DESTAQUE_1,
        paddingHorizontal: 18,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        paddingVertical: 8,
        paddingBottom: 30,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        gap: 12,
    },
    emptyText: {
        color: '#52525b',
        fontSize: 16,
    },
})
