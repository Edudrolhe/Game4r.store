import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Nossa História',
    description: 'Conheça a história da Gam4r.store, sua missão, visão e valores.',
}

export default function NossaHistoria() {
    return (
        <div className="flex-1 flex flex-col container gap-10 py-10">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">Nossa História</h1>
                <p className="text-zinc-400 text-lg max-w-2xl">
                    Como nasceu a Gam4r.store e o que nos move a cada dia.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                    <p>
                        A Gam4r.store nasceu da paixão por games e da vontade de criar uma
                        experiência de compra verdadeiramente pensada para jogadores. Fundada
                        em 2024, nossa loja começou como um projeto entre amigos que
                        compartilhavam o mesmo sonho: tornar o acesso a jogos, acessórios e
                        produtos gamers mais fácil e justo para todos.
                    </p>
                    <p>
                        Desde o primeiro dia, nosso foco foi oferecer não apenas produtos de
                        qualidade, mas um atendimento que entende as necessidades de quem vive
                        e respira o universo dos games. Cada jogo em nosso catálogo é
                        selecionado com cuidado, e cada promoção é pensada para fazer a
                        diferença no bolso do jogador.
                    </p>
                </div>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-violet-dark/20 border border-violet-dark/30 flex items-center justify-center">
                    <div className="text-center p-8">
                        <span className="text-6xl">🎮</span>
                        <p className="text-zinc-500 mt-4 text-sm">Imagem institucional</p>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col gap-3">
                    <span className="text-violet-dark text-3xl font-black">01</span>
                    <h3 className="text-xl font-bold text-white">Missão</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Democratizar o acesso a produtos gamers de qualidade, oferecendo
                        preços justos e uma experiência de compra excepcional.
                    </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col gap-3">
                    <span className="text-violet-dark text-3xl font-black">02</span>
                    <h3 className="text-xl font-bold text-white">Visão</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Ser referência no mercado gamer brasileiro, reconhecida pela
                        curadoria de qualidade e pelo compromisso com a comunidade.
                    </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col gap-3">
                    <span className="text-violet-dark text-3xl font-black">03</span>
                    <h3 className="text-xl font-bold text-white">Valores</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Paixão por games, transparência, respeito à comunidade e inovação
                        constante em tudo que fazemos.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 text-zinc-300 leading-relaxed max-w-4xl">
                <h2 className="text-2xl font-bold text-white">O que nos move</h2>
                <p>
                    Acreditamos que os games têm o poder de conectar pessoas, contar
                    histórias inesquecíveis e criar momentos que marcam a vida. É por isso
                    que trabalhamos todos os dias para oferecer a melhor experiência de
                    compra — do atendimento pré-venda até o suporte pós-venda.
                </p>
                <p>
                    Seja bem-vindo à Gam4r.store. Aqui, você não é apenas um cliente: você
                    é parte da nossa história.
                </p>
            </div>
        </div>
    )
}
