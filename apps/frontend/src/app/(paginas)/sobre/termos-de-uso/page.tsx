import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Termos de Uso',
    description: 'Termos e condições de uso da Gam4r.store.',
}

export default function TermosDeUso() {
    return (
        <div className="flex-1 flex flex-col container gap-8 py-10 max-w-4xl">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">Termos de Uso</h1>
                <p className="text-zinc-500 text-sm">
                    Última atualização: julho de 2026
                </p>
            </div>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">1. Aceitação dos Termos</h2>
                <p>
                    Ao acessar e utilizar a plataforma da Gam4r.store, você declara estar de
                    acordo com estes Termos de Uso. Caso não concorde com qualquer condição,
                    recomendamos que não utilize nossos serviços.
                </p>
            </section>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">2. Cadastro e Conta</h2>
                <p>
                    Para realizar compras, é necessário criar uma conta. Você é responsável
                    por manter a confidencialidade dos seus dados de acesso e por todas as
                    atividades realizadas em sua conta.
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                    <li>Seus dados devem ser precisos e atualizados</li>
                    <li>Não compartilhe sua senha com terceiros</li>
                    <li>Nos informe imediatamente em caso de uso não autorizado</li>
                </ul>
            </section>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">3. Compras e Pagamentos</h2>
                <p>
                    Todos os preços exibidos estão em reais (R$) e podem ser alterados sem
                    aviso prévio. O pagamento deve ser efetuado no ato da compra através das
                    formas de pagamento disponíveis na plataforma.
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                    <li>Os produtos digitais são entregues imediatamente após a confirmação do pagamento</li>
                    <li>Produtos físicos seguem o prazo de entrega informado no momento da compra</li>
                    <li>Promoções e descontos são válidos enquanto durarem os estoques</li>
                </ul>
            </section>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">4. Direitos de Propriedade Intelectual</h2>
                <p>
                    Todo o conteúdo da plataforma — logos, textos, imagens, código — é de
                    propriedade da Gam4r.store ou de seus licenciantes, sendo proibida a
                    reprodução total ou parcial sem autorização expressa.
                </p>
            </section>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">5. Limitação de Responsabilidade</h2>
                <p>
                    A Gam4r.store não se responsabiliza por danos indiretos decorrentes do
                    uso da plataforma, incluindo mas não se limitando a perda de dados,
                    lucros cessantes ou interrupção de serviços.
                </p>
            </section>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">6. Alterações nos Termos</h2>
                <p>
                    Estes termos podem ser atualizados periodicamente. Recomendamos a
                    consulta regular desta página para manter-se informado sobre eventuais
                    mudanças.
                </p>
            </section>

            <section className="flex flex-col gap-4 text-zinc-300 leading-relaxed">
                <h2 className="text-xl font-bold text-white">7. Contato</h2>
                <p>
                    Em caso de dúvidas sobre estes termos, entre em contato pelo e-mail{' '}
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
