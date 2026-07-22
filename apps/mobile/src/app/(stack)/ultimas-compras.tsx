import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function UltimasCompras() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Ionicons name="receipt-outline" size={64} color="#444" />
                <Text style={styles.title}>Ultimas Compras</Text>
                <Text style={styles.subtitle}>
                    Voce ainda nao realizou nenhuma compra.
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0E001D' },
    content: { alignItems: 'center', gap: 12, paddingHorizontal: 40 },
    title: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
    subtitle: { color: '#888', fontSize: 15, textAlign: 'center' },
})
