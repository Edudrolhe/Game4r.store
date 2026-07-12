import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Política de Privacidade',
    description: 'Política de privacidade da Gam4r.store — saiba como tratamos seus dados.',
}

export default function PoliticaDePrivacidade() {
    return (
        <div className="flex-1 flex flex-col container gap-8 py-10 max-w-4xl">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    Política de Privacidade
                </h1>
                <p className="text-zinc-500 text-sm">
                    Última atualização: julho de 2026
                </p>
            </div>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">1. Introdução</h2>
                <p>
                    A Gam4r.store está comprometida com a proteção da sua privacidade. Esta
                    política descreve como coletamos, usamos e protegemos as informações
                    pessoais que você nos fornece ao utilizar nossa loja.
                </p>
            </section>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">2. Dados Coletados</h2>
                <p>Podemos coletar as seguintes informações:</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Endereço de entrega</li>
                    <li>CPF e dados fiscais</li>
                    <li>Histórico de compras</li>
                    <li>Informações de navegação (cookies)</li>
                </ul>
            </section>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">3. Uso dos Dados</h2>
                <p>Utilizamos seus dados para:</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                    <li>Processar e entregar seus pedidos</li>
                    <li>Enviar atualizações sobre sua conta e compras</li>
                    <li>Melhorar nossa loja e experiência de navegação</li>
                    <li>Enviar ofertas e promoções (com seu consentimento)</li>
                    <li>Cumprir obrigações legais e fiscais</li>
                </ul>
            </section>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">4. Compartilhamento de Dados</h2>
                <p>
                    Não vendemos seus dados pessoais. Podemos compartilhar informações com
                    parceiros de confiança para processar pagamentos, realizar entregas e
                    operar nossa plataforma, sempre sob contratos que garantem a proteção
                    dos seus dados.
                </p>
            </section>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">5. Seus Direitos</h2>
                <p>Você tem direito a:</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                    <li>Acessar seus dados pessoais</li>
                    <li>Corrigir dados incompletos ou desatualizados</li>
                    <li>Solicitar a exclusão dos seus dados</li>
                    <li>Revogar consentimento a qualquer momento</li>
                    <li>Solicitar a portabilidade dos dados</li>
                </ul>
            </section>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">6. Contato</h2>
                <p>
                    Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus
                    dados, entre em contato conosco pelo e-mail{' '}
                    <a
                        href="mailto:suporte@gam4r.store"
                        className="text-violet-dark hover:underline"
                    >
                        suporte@gam4r.store
                    </a>
                    .
                </p>
            </section>
        </div>
    )
}
