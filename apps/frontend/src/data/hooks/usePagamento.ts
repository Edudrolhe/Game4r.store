'use client'

import { useContext } from 'react'
import ContextoPagamento from '../contexts/ContextoPagamento'

export default function usePagamento() {
    const ctx = useContext(ContextoPagamento)
    if (!ctx) throw new Error('usePagamento deve ser usado dentro de ProvedorPagamento')
    return ctx
}
