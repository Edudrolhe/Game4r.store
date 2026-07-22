import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, Pressable, ActivityIndicator } from 'react-native'
import { router } from 'expo-router'
import Cores from '@/data/constants/Cores'
import useUsuario from '@/data/hooks/useUsuario'

export default function Login() {
    const { login } = useUsuario()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')
    const [submitting, setSubmitting] = useState(false)

    async function handleLogin() {
        setErro(''); setSubmitting(true)
        try {
            await login(email, senha)
            router.back()
        } catch (e: any) {
            setErro(e?.message ?? 'Erro ao fazer login')
        } finally { setSubmitting(false) }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.titulo}>Login</Text>
                {erro ? <Text style={styles.erro}>{erro}</Text> : null}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
                <Pressable
                    style={[styles.botao, submitting && { opacity: 0.6 }]}
                    onPress={handleLogin}
                    disabled={submitting}
                >
                    {submitting ? <ActivityIndicator color="#FFF" /> : null}
                    <Text style={styles.botaoTexto}>
                        {submitting ? 'Entrando...' : 'Entrar'}
                    </Text>
                </Pressable>
                <Pressable onPress={() => router.push('/cadastro')}>
                    <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0E001D' },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30, gap: 16 },
    titulo: { fontSize: 28, fontWeight: 'bold', color: '#FFF', marginBottom: 8 },
    erro: { color: '#ef4444', fontSize: 14, textAlign: 'center' },
    input: {
        width: '100%', maxWidth: 360, height: 48,
        backgroundColor: '#1A0D29', borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)', borderRadius: 10,
        paddingHorizontal: 16, color: '#FFF', fontSize: 15,
    },
    link: { color: Cores.PRIMARIA, fontSize: 14, marginTop: 4 },
    botao: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        backgroundColor: Cores.PRIMARIA, borderRadius: 9999,
        width: '100%', maxWidth: 360, height: 48, gap: 8, marginTop: 4,
    },
    botaoTexto: { color: '#FFF', fontSize: 16, fontWeight: '600' },
})
