import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Pressable, ActivityIndicator } from 'react-native'
import { router } from 'expo-router'
import Cores from '@/data/constants/Cores'
import useUsuario from '@/data/hooks/useUsuario'

export default function Cadastro() {
    const { cadastrar } = useUsuario()
    const [form, setForm] = useState({ nome: '', email: '', senha: '', telefone: '' })
    const [erro, setErro] = useState('')
    const [submitting, setSubmitting] = useState(false)

    async function handleCadastro() {
        setErro(''); setSubmitting(true)
        try {
            await cadastrar(form)
            router.back()
        } catch (e: any) {
            setErro(e?.message ?? 'Erro ao cadastrar')
        } finally { setSubmitting(false) }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.titulo}>Cadastro</Text>
                {erro ? <Text style={styles.erro}>{erro}</Text> : null}
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#999"
                    value={form.nome}
                    onChangeText={(v) => setForm({ ...form, nome: v })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    value={form.email}
                    onChangeText={(v) => setForm({ ...form, email: v })}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    value={form.senha}
                    onChangeText={(v) => setForm({ ...form, senha: v })}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    placeholderTextColor="#999"
                    value={form.telefone}
                    onChangeText={(v) => setForm({ ...form, telefone: v })}
                    keyboardType="phone-pad"
                />
                <Pressable
                    style={[styles.botao, submitting && { opacity: 0.6 }]}
                    onPress={handleCadastro}
                    disabled={submitting}
                >
                    {submitting ? <ActivityIndicator color="#FFF" /> : null}
                    <Text style={styles.botaoTexto}>
                        {submitting ? 'Cadastrando...' : 'Cadastrar'}
                    </Text>
                </Pressable>
                <Pressable onPress={() => router.push('/login')}>
                    <Text style={styles.link}>Já tem conta? Faça login</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0E001D' },
    content: { alignItems: 'center', paddingVertical: 40, paddingHorizontal: 30, gap: 16 },
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
