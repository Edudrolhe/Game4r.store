import { useCallback } from 'react'

const urlBase = process.env.NEXT_PUBLIC_API_URL

function headersAuth(): Record<string, string> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    return {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }
}

async function extrairDados<T = unknown>(resposta: Response): Promise<T> {
    const texto = await resposta.text()
    if (!resposta.ok) {
        let mensagem = 'Erro na requisição'
        try {
            const corpo = JSON.parse(texto)
            mensagem = corpo.message ?? mensagem
        } catch { /* ignora */ }
        throw new Error(mensagem)
    }
    return JSON.parse(texto) as T
}

export default function useAPI() {
    const httpGet = useCallback(async function <T = unknown>(caminho: string): Promise<T> {
        const uri = caminho.startsWith('/') ? caminho : `/${caminho}`
        const resposta = await fetch(`${urlBase}${uri}`, {
            headers: headersAuth(),
        })
        return extrairDados<T>(resposta)
    }, [])

    const httpPost = useCallback(async function <T = unknown>(caminho: string, body: unknown): Promise<T> {
        const uri = caminho.startsWith('/') ? caminho : `/${caminho}`
        const resposta = await fetch(`${urlBase}${uri}`, {
            method: 'POST',
            headers: headersAuth(),
            body: JSON.stringify(body),
        })
        return extrairDados<T>(resposta)
    }, [])

    const httpPut = useCallback(async function <T = unknown>(caminho: string, body: unknown): Promise<T> {
        const uri = caminho.startsWith('/') ? caminho : `/${caminho}`
        const resposta = await fetch(`${urlBase}${uri}`, {
            method: 'PUT',
            headers: headersAuth(),
            body: JSON.stringify(body),
        })
        return extrairDados<T>(resposta)
    }, [])

    const httpDelete = useCallback(async function <T = unknown>(caminho: string): Promise<T> {
        const uri = caminho.startsWith('/') ? caminho : `/${caminho}`
        const resposta = await fetch(`${urlBase}${uri}`, {
            method: 'DELETE',
            headers: headersAuth(),
        })
        return extrairDados<T>(resposta)
    }, [])

    return { httpGet, httpPost, httpPut, httpDelete }
}
