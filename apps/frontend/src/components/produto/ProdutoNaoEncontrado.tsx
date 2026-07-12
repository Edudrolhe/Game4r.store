import Link from 'next/link'

export default function ProdutoNaoEncontrado() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 py-20">
            <span className="text-6xl">😕</span>
            <h2 className="text-2xl font-bold text-white">Produto não encontrado</h2>
            <p className="text-steel text-sm">
                O produto que você está procurando não existe ou foi removido.
            </p>
            <Link
                href="/"
                className="btn-primary mt-4"
            >
                Voltar para loja
            </Link>
        </div>
    )
}
