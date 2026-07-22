import { useCallback } from 'react'
import * as SecureStore from 'expo-secure-store'

export default function useLocalStorage() {
    const obterItem = useCallback(async (chave: string) => {
        const valorLocal = await SecureStore.getItemAsync(chave)
        return valorLocal ? JSON.parse(valorLocal) : null
    }, [])

    const salvarItem = useCallback(async (chave: string, valor: any) => {
        if (valor == null) {
            await SecureStore.deleteItemAsync(chave)
        } else {
            await SecureStore.setItemAsync(chave, JSON.stringify(valor))
        }
    }, [])

    return { obterItem, salvarItem }
}
