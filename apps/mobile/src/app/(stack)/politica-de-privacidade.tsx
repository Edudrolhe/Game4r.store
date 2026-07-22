import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Cores from '@/data/constants/Cores'

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
    return (
        <View style={styles.secao}>
            <Text style={styles.secaoTitulo}>{titulo}</Text>
            {children}
        </View>
    )
}

function Bullet({ items }: { items: string[] }) {
    return (
        <View style={styles.bulletContainer}>
            {items.map((item, i) => (
                <Text key={i} style={styles.bulletItem}>• {item}</Text>
            ))}
        </View>
    )
}

export default function PoliticaPrivacidade() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.h1}>Política de Privacidade</Text>
            <Text style={styles.atualizacao}>Última atualização: julho de 2026</Text>

            <Secao titulo="1. Introdução">
                <Text style={styles.body}>
                    A Gam4r.store está comprometida com a proteção da sua privacidade. Esta política
                    descreve como coletamos, usamos e protegemos as informações pessoais que você nos
                    fornece ao utilizar nossa loja.
                </Text>
            </Secao>

            <Secao titulo="2. Dados Coletados">
                <Text style={styles.body}>Podemos coletar as seguintes informações:</Text>
                <Bullet items={['Nome completo', 'Endereço de e-mail', 'Endereço de entrega', 'CPF e dados fiscais', 'Histórico de compras', 'Informações de navegação (cookies)']} />
            </Secao>

            <Secao titulo="3. Uso dos Dados">
                <Text style={styles.body}>Utilizamos seus dados para:</Text>
                <Bullet items={['Processar e entregar seus pedidos', 'Enviar atualizações sobre sua conta e compras', 'Melhorar nossa loja e experiência de navegação', 'Enviar ofertas e promoções (com seu consentimento)', 'Cumprir obrigações legais e fiscais']} />
            </Secao>

            <Secao titulo="4. Compartilhamento de Dados">
                <Text style={styles.body}>
                    Não vendemos seus dados pessoais. Podemos compartilhar informações com parceiros
                    de confiança para processar pagamentos, realizar entregas e operar nossa
                    plataforma, sempre sob contratos que garantem a proteção dos seus dados.
                </Text>
            </Secao>

            <Secao titulo="5. Seus Direitos">
                <Text style={styles.body}>Você tem direito a:</Text>
                <Bullet items={['Acessar seus dados pessoais', 'Corrigir dados incompletos ou desatualizados', 'Solicitar a exclusão dos seus dados', 'Revogar consentimento a qualquer momento', 'Solicitar a portabilidade dos dados']} />
            </Secao>

            <Secao titulo="6. Contato">
                <Text style={styles.body}>
                    Em caso de dúvidas sobre esta política, entre em contato pelo e-mail{' '}
                    <Text style={styles.destaque}>suporte@gam4r.store</Text>.
                </Text>
            </Secao>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Cores.BG_PRIMARIO },
    content: { padding: 24, gap: 20, paddingBottom: 60 },
    h1: { color: '#FFF', fontSize: 28, fontWeight: 'bold' },
    atualizacao: { color: '#71717a', fontSize: 13 },
    body: { color: '#d4d4d8', fontSize: 15, lineHeight: 24 },
    destaque: { color: Cores.PRIMARIA, fontWeight: '600' },
    secao: { gap: 10 },
    secaoTitulo: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
    bulletContainer: { paddingLeft: 8, gap: 4 },
    bulletItem: { color: '#a1a1aa', fontSize: 15, lineHeight: 22 },
})
