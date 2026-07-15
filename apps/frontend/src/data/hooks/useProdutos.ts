'use client'

import { useContext } from 'react'
import ContextoProdutos from '../contexts/ContextoProdutos'

export default function useProdutos() {
    const ctx = useContext(ContextoProdutos)
    if (!ctx) throw new Error('useProdutos deve ser usado dentro de ProvedorProdutos')
    return ctx
}
