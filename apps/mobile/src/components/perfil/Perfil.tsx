import { StyleSheet, View, Image, Text } from 'react-native'

export interface PerfilProps {
    nome: string
    email: string
    telefone: string
}

export default function Perfil(props: PerfilProps) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/avatar.png')}
                style={styles.avatar}
            />
            <Text style={styles.destaque}>Fala, {props.nome}!</Text>
            <Text style={styles.texto}>E-mail: {props.email}</Text>
            {props.telefone ? <Text style={styles.texto}>Telefone: {props.telefone}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 48,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
    },
    destaque: {
        fontSize: 26,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 8,
    },
    texto: {
        fontSize: 16,
        color: '#a1a1aa',
        marginTop: 2,
    },
})
