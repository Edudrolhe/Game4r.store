'use client'

import { useEffect, useState } from 'react'
import { Produto } from '@game4r/core'
import NotaReview from '../shared/NotaReview'

const API = 'http://localhost:4000'

export interface AvaliacoesUsuariosProps {
    produto: Produto
}

export default function AvaliacoesUsuarios(props: AvaliacoesUsuariosProps) {
    const { produto } = props
    const [total, setTotal] = useState(0)
    const [media, setMedia] = useState(0)

    useEffect(() => {
        fetch(`${API}/avaliacoes/produto/${produto.id}/resumo`)
            .then((r) => r.json())
            .then((data) => {
                setTotal(data.total)
                setMedia(data.media)
            })
            .catch(() => {})
    }, [produto.id])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-2xl font-semibold text-brand-green-dark">
                    Avaliações dos Usuários
                </span>
            </div>
            <p className="font-light text-zinc-300">
                O produto é elogiado por seu desempenho, qualidade de som e
                praticidade. Os clientes destacam o bom custo-benefício, a
                qualidade do microfone embutido e a facilidade de instalação.
                Alguns mencionam que o produto é ideal para jogos e que o
                desempenho é excelente, mesmo sem placa de vídeo dedicada.
                Outros destacam a qualidade do som e o conforto do fone de
                ouvido.
            </p>
            <div className="flex items-center gap-5 mt-5">
                <div className="flex flex-col gap-2 items-center">
                    <div className="text-7xl text-pink-600">
                        {media > 0 ? media.toFixed(1) : produto.nota}
                    </div>
                    <NotaReview nota={media > 0 ? media : produto.nota} tamanho={18} />
                    <div className="font-light text-sm text-zinc-300">
                        ({total} Comentário{total !== 1 ? 's' : ''})
                    </div>
                </div>
                <div className="flex-1 flex items-center bg-violet-dark/50 h-32 rounded-xl">
                    <ul className="flex flex-col list-disc px-10 gap-1 text-zinc-300">
                        <li>Desempenho excelente.</li>
                        <li>Custo benefício ótimo.</li>
                        <li>Gráfico dedicado.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
