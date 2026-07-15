import { useCallback } from 'react'

export default function useLocalStorage() {
    const salvarItem = useCallback(<T>(chave: string, valor: T) => {
        if (typeof window === 'undefined') return
        localStorage.setItem(chave, JSON.stringify(valor))
    }, [])

    const obterItem = useCallback(<T = unknown>(chave: string): T | null => {
        if (typeof window === 'undefined') return null
        const valor = localStorage.getItem(chave)
        return valor ? (JSON.parse(valor) as T) : null
    }, [])

    const removerItem = useCallback((chave: string) => {
        if (typeof window === 'undefined') return
        localStorage.removeItem(chave)
    }, [])

    return { salvarItem, obterItem, removerItem }
}
