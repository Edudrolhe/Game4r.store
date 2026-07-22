import { createContext, useCallback, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useAPI from '../hooks/useAPI'

export interface Usuario {
    nome: string
    email: string
    telefone?: string
    token: string
}

export interface ContextoUsuarioProps {
    usuario: Usuario | null
    carregando: boolean
    login: (email: string, senha: string) => Promise<void>
    cadastrar: (dados: { nome: string; email: string; senha: string; telefone: string }) => Promise<void>
    logout: () => void
}

const ContextoUsuario = createContext<ContextoUsuarioProps>({} as any)

export function ProvedorUsuario(props: any) {
    const { httpPost } = useAPI()
    const { salvarItem, obterItem } = useLocalStorage()
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [carregando, setCarregando] = useState(true)

    const login = useCallback(async (email: string, senha: string) => {
        const data = await httpPost('/auth/login', { email, senha })
        const u: Usuario = { nome: data.usuario.nome, email, token: data.token }
        await salvarItem('usuario', u)
        setUsuario(u)
    }, [httpPost, salvarItem])

    const cadastrar = useCallback(async (dados: { nome: string; email: string; senha: string; telefone: string }) => {
        const data = await httpPost('/auth/cadastrar', dados)
        const u: Usuario = { nome: data.usuario.nome, email: dados.email, token: data.token }
        await salvarItem('usuario', u)
        setUsuario(u)
    }, [httpPost, salvarItem])

    const logout = useCallback(async () => {
        await salvarItem('usuario', null)
        setUsuario(null)
    }, [salvarItem])

    useEffect(() => {
        obterItem('usuario').then((u: Usuario | null) => {
            if (u) setUsuario(u)
            setCarregando(false)
        })
    }, [obterItem])

    return (
        <ContextoUsuario.Provider value={{ usuario, carregando, login, cadastrar, logout }}>
            {props.children}
        </ContextoUsuario.Provider>
    )
}

export default ContextoUsuario
