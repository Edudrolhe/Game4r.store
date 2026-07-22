import { SafeAreaView, View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function Sucesso() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../../assets/images/icon.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Pedido Realizado com Sucesso!</Text>
                <Text style={styles.subtitle}>
                    Voce recebera um e-mail com os detalhes da sua compra.
                </Text>
                <Pressable style={styles.botao} onPress={() => router.replace('/(tabs)')}>
                    <Ionicons name="home-outline" size={20} color="#FFF" />
                    <Text style={styles.botaoTexto}>Voltar ao Inicio</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0D001E' },
    content: { alignItems: 'center', gap: 20, paddingHorizontal: 40 },
    logo: { width: 180, height: 180 },
    title: { fontSize: 26, fontWeight: 'bold', color: '#FFF', textAlign: 'center' },
    subtitle: { color: '#71717a', fontSize: 16, textAlign: 'center' },
    botao: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#7811F5', borderRadius: 999, height: 48,
        paddingHorizontal: 40, gap: 8, marginTop: 12,
    },
    botaoTexto: { color: '#FFF', fontSize: 16, fontWeight: '600' },
})
