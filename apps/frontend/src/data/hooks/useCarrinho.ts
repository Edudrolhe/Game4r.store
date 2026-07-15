'use client'

import { useContext } from 'react'
import ContextoCarrinho from '../contexts/ContextoCarrinho'

export default function useCarrinho() {
    const ctx = useContext(ContextoCarrinho)
    if (!ctx) throw new Error('useCarrinho deve ser usado dentro de ProvedorCarrinho')
    return ctx
}
