import AvaliacaoEspecializada from '@/src/components/produto/AvaliacaoEspecializada'
import AvaliacoesUsuarios from '@/src/components/produto/AvaliacoesUsuarios'
import BannerCompra from '@/src/components/produto/BannerCompra'
import InformacoesProduto from '@/src/components/produto/InformacoesProduto'
import MedidorDePreco from '@/src/components/produto/MedidorDePreco'
import ProdutoNaoEncontrado from '@/src/components/produto/ProdutoNaoEncontrado'
import TituloProduto from '@/src/components/produto/TituloProduto'
import { produtos } from '@game4r/core'

export default async function PaginaProduto(props: { params: Promise<{ id: string }> }) {
    const { id: idStr } = await props.params
    const id = +idStr
    const produto = produtos.find((produto) => produto.id === id)

    return produto ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <TituloProduto produto={produto} />
                <InformacoesProduto produto={produto} />
                <BannerCompra produto={produto} />
                <MedidorDePreco produto={produto} />
            </div>
            <AvaliacoesUsuarios produto={produto} />
            <AvaliacaoEspecializada produto={produto} />
        </div>
    ) : (
        <ProdutoNaoEncontrado />
    )
}
