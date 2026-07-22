import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Cores from '@/data/constants/Cores'

export default function NossaHistoria() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.h1}>Nossa História</Text>
            <Text style={styles.subtitle}>Como nasceu a Gam4r.store e o que nos move a cada dia.</Text>
            <Text style={styles.body}>
                A Gam4r.store nasceu da paixão por games e da vontade de criar uma experiência
                de compra verdadeiramente pensada para jogadores. Fundada em 2024, nossa loja
                começou como um projeto entre amigos que compartilhavam o mesmo sonho: tornar o
                acesso a jogos, acessórios e produtos gamers mais fácil e justo para todos.
            </Text>
            <Text style={styles.body}>
                Desde o primeiro dia, nosso foco foi oferecer não apenas produtos de qualidade,
                mas um atendimento que entende as necessidades de quem vive e respira o universo
                dos games. Cada jogo em nosso catálogo é selecionado com cuidado, e cada promoção
                é pensada para fazer a diferença no bolso do jogador.
            </Text>
            <View style={styles.cardsContainer}>
                {[
                    { num: '01', titulo: 'Missão', texto: 'Democratizar o acesso a produtos gamers de qualidade, oferecendo preços justos e uma experiência de compra excepcional.' },
                    { num: '02', titulo: 'Visão', texto: 'Ser referência no mercado gamer brasileiro, reconhecida pela curadoria de qualidade e pelo compromisso com a comunidade.' },
                    { num: '03', titulo: 'Valores', texto: 'Paixão por games, transparência, respeito à comunidade e inovação constante em tudo que fazemos.' },
                ].map((item) => (
                    <View key={item.num} style={styles.card}>
                        <Text style={styles.cardNumero}>{item.num}</Text>
                        <Text style={styles.cardTitulo}>{item.titulo}</Text>
                        <Text style={styles.cardTexto}>{item.texto}</Text>
                    </View>
                ))}
            </View>
            <Text style={styles.h2}>O que nos move</Text>
            <Text style={styles.body}>
                Acreditamos que os games têm o poder de conectar pessoas, contar histórias
                inesquecíveis e criar momentos que marcam a vida. É por isso que trabalhamos
                todos os dias para oferecer a melhor experiência de compra — do atendimento
                pré-venda até o suporte pós-venda.
            </Text>
            <Text style={styles.body}>
                Seja bem-vindo à Gam4r.store. Aqui, você não é apenas um cliente: você é parte
                da nossa história.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Cores.BG_PRIMARIO },
    content: { padding: 24, gap: 20, paddingBottom: 60 },
    h1: { color: '#FFF', fontSize: 28, fontWeight: 'bold' },
    h2: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginTop: 8 },
    subtitle: { color: '#a1a1aa', fontSize: 16 },
    body: { color: '#d4d4d8', fontSize: 15, lineHeight: 24, textAlign: 'justify' },
    cardsContainer: { gap: 12, marginTop: 8 },
    card: {
        backgroundColor: 'rgba(255,255,255,0.04)',
        borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)',
        borderRadius: 12, padding: 20, gap: 8,
    },
    cardNumero: { color: Cores.PRIMARIA, fontSize: 28, fontWeight: '900' },
    cardTitulo: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
    cardTexto: { color: '#a1a1aa', fontSize: 14, lineHeight: 20 },
})
