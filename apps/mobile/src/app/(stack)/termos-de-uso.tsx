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

export default function TermosDeUso() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.h1}>Termos de Uso</Text>
            <Text style={styles.atualizacao}>Última atualização: julho de 2026</Text>

            <Secao titulo="1. Aceitação dos Termos">
                <Text style={styles.body}>
                    Ao acessar e utilizar a plataforma da Gam4r.store, você declara estar de acordo
                    com estes Termos de Uso. Caso não concorde com qualquer condição, recomendamos
                    que não utilize nossos serviços.
                </Text>
            </Secao>

            <Secao titulo="2. Cadastro e Conta">
                <Text style={styles.body}>
                    Para realizar compras, é necessário criar uma conta. Você é responsável por
                    manter a confidencialidade dos seus dados de acesso e por todas as atividades
                    realizadas em sua conta.
                </Text>
                <Bullet items={['Seus dados devem ser precisos e atualizados', 'Não compartilhe sua senha com terceiros', 'Nos informe imediatamente em caso de uso não autorizado']} />
            </Secao>

            <Secao titulo="3. Compras e Pagamentos">
                <Text style={styles.body}>
                    Todos os preços exibidos estão em reais (R$) e podem ser alterados sem aviso
                    prévio. O pagamento deve ser efetuado no ato da compra através das formas de
                    pagamento disponíveis na plataforma.
                </Text>
                <Bullet items={['Produtos digitais entregues imediatamente após confirmação do pagamento', 'Produtos físicos seguem o prazo de entrega informado no momento da compra', 'Promoções e descontos são válidos enquanto durarem os estoques']} />
            </Secao>

            <Secao titulo="4. Direitos de Propriedade Intelectual">
                <Text style={styles.body}>
                    Todo o conteúdo da plataforma — logos, textos, imagens, código — é de
                    propriedade da Gam4r.store ou de seus licenciantes, sendo proibida a
                    reprodução total ou parcial sem autorização expressa.
                </Text>
            </Secao>

            <Secao titulo="5. Limitação de Responsabilidade">
                <Text style={styles.body}>
                    A Gam4r.store não se responsabiliza por danos indiretos decorrentes do uso da
                    plataforma, incluindo mas não se limitando a perda de dados, lucros cessantes
                    ou interrupção de serviços.
                </Text>
            </Secao>

            <Secao titulo="6. Alterações nos Termos">
                <Text style={styles.body}>
                    Estes termos podem ser atualizados periodicamente. Recomendamos a consulta
                    regular desta página para manter-se informado sobre eventuais mudanças.
                </Text>
            </Secao>

            <Secao titulo="7. Contato">
                <Text style={styles.body}>
                    Em caso de dúvidas sobre estes termos, entre em contato pelo e-mail{' '}
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
