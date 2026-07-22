import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, ActivityIndicator } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Cores from '@/data/constants/Cores'
import useUsuario from '@/data/hooks/useUsuario'
import Perfil from '@/components/perfil/Perfil'

export default function Usuario() {
    const { usuario, carregando, logout } = useUsuario()

    if (carregando) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color={Cores.PRIMARIA} style={{ marginTop: 100 }} />
            </SafeAreaView>
        )
    }

    if (usuario) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitulo}>Perfil</Text>
                </View>
                <ScrollView contentContainerStyle={styles.content}>
                    <Perfil nome={usuario.nome} email={usuario.email} telefone={usuario.telefone ?? ''} />
                    <Pressable style={styles.botao} onPress={() => router.push('/ultimas-compras')}>
                        <Ionicons name="receipt-outline" size={22} color="#FFF" />
                        <Text style={styles.botaoTexto}>Últimas Compras</Text>
                    </Pressable>
                    <Pressable style={styles.botaoLogout} onPress={() => logout()}>
                        <Ionicons name="log-out-outline" size={22} color="#FFF" />
                        <Text style={styles.botaoTexto}>Sair</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitulo}>Conta</Text>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.avatarContainer}>
                    <Ionicons name="person-circle-outline" size={100} color="#444" />
                </View>
                <Text style={styles.titulo}>Bem-vindo!</Text>
                <Text style={styles.subtitulo}>Faça login ou crie sua conta</Text>
                <Pressable style={styles.botao} onPress={() => router.push('/login')}>
                    <Ionicons name="log-in-outline" size={22} color="#FFF" />
                    <Text style={styles.botaoTexto}>Login</Text>
                </Pressable>
                <Pressable style={[styles.botao, { backgroundColor: '#1A0D29' }]} onPress={() => router.push('/cadastro')}>
                    <Ionicons name="person-add-outline" size={22} color={Cores.PRIMARIA} />
                    <Text style={[styles.botaoTexto, { color: Cores.PRIMARIA }]}>Criar Conta</Text>
                </Pressable>

                <View style={styles.divisor} />

                <Text style={styles.secaoTitulo}>Sobre</Text>
                <Pressable style={styles.linkSobre} onPress={() => router.push('/nossa-historia')}>
                    <Ionicons name="book-outline" size={18} color="#a1a1aa" />
                    <Text style={styles.linkSobreTexto}>Nossa História</Text>
                </Pressable>
                <Pressable style={styles.linkSobre} onPress={() => router.push('/politica-de-privacidade')}>
                    <Ionicons name="shield-outline" size={18} color="#a1a1aa" />
                    <Text style={styles.linkSobreTexto}>Política de Privacidade</Text>
                </Pressable>
                <Pressable style={styles.linkSobre} onPress={() => router.push('/termos-de-uso')}>
                    <Ionicons name="document-text-outline" size={18} color="#a1a1aa" />
                    <Text style={styles.linkSobreTexto}>Termos de Uso</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0E001D', width: '100%' },
    header: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 16, backgroundColor: '#14002D', borderBottomWidth: 1, borderBottomColor: 'rgba(120,17,245,0.2)' },
    headerTitulo: { color: '#FFF', fontSize: 20, fontWeight: '700' },
    content: { alignItems: 'center', paddingVertical: 40, paddingHorizontal: 30, gap: 16 },
    avatarContainer: { marginBottom: 8 },
    titulo: { fontSize: 26, fontWeight: 'bold', color: '#FFF' },
    subtitulo: { color: '#a1a1aa', fontSize: 15, textAlign: 'center' },
    divisor: { width: '80%', height: 1, backgroundColor: 'rgba(255,255,255,0.08)', marginVertical: 16 },
    secaoTitulo: { color: '#a1a1aa', fontSize: 14, fontWeight: '600', alignSelf: 'flex-start', marginLeft: 8, textTransform: 'uppercase', letterSpacing: 1 },
    linkSobre: {
        flexDirection: 'row', alignItems: 'center', gap: 12,
        width: '100%', maxWidth: 360, paddingVertical: 12, paddingHorizontal: 16,
        borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.03)',
    },
    linkSobreTexto: { color: '#d4d4d8', fontSize: 15 },
    botao: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        backgroundColor: Cores.PRIMARIA, borderRadius: 9999,
        width: '100%', maxWidth: 360, height: 48, gap: 8,
    },
    botaoLogout: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#ef4444', borderRadius: 9999,
        width: '100%', maxWidth: 360, height: 48, gap: 8,
    },
    botaoTexto: { color: '#FFF', fontSize: 16, fontWeight: '600' },
})
