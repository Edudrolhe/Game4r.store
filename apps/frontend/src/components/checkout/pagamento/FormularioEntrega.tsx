import { PedidoEntrega } from "@game4r/core"


export interface FormularioEntregaProps {
    entrega: Partial<PedidoEntrega>
    entregaMudou: (entrega: Partial<PedidoEntrega>) => void
    className?: string
}

export default function FormularioEntrega(props: FormularioEntregaProps) {
    const { entrega, entregaMudou } = props

    function alterarAtributo(atributo: string) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            entregaMudou({ ...entrega, [atributo]: e.target.value })
        }
    }

    return (
        <div className={`flex flex-col gap-3 ${props.className ?? ''}`}>
            <span className="px-7 pb-2 text-xl font-bold text-white/70">
                Dados da Entrega
            </span>
            <div className="flex flex-col gap-5 bg-violet-dark rounded-xl p-6">
                <input
                    placeholder="Nome Completo"
                    value={entrega.nome ?? ''}
                    onChange={alterarAtributo('nome')}
                    autoComplete="name"
                    className="input"
                />
                <div className="flex flex-col sm:flex-row gap-5">
                    <input
                        placeholder="E-mail"
                        value={entrega.email ?? ''}
                        onChange={alterarAtributo('email')}
                        autoComplete="email"
                        className="input flex-1"
                    />
                    <input
                        placeholder="CPF"
                        value={entrega.cpf ?? ''}
                        onChange={alterarAtributo('cpf')}
                        autoComplete="off"
                        className="input flex-1"
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                    <input
                        placeholder="Logradouro"
                        value={entrega.logradouro ?? ''}
                        onChange={alterarAtributo('logradouro')}
                        autoComplete="address-line1"
                        className="input flex-1"
                    />
                    <input
                        placeholder="Número"
                        value={entrega.numero ?? ''}
                        onChange={alterarAtributo('numero')}
                        autoComplete="address-line1"
                        className="input sm:w-32"
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                    <input
                        placeholder="Complemento"
                        value={entrega.complemento ?? ''}
                        onChange={alterarAtributo('complemento')}
                        autoComplete="address-line2"
                        className="input flex-1"
                    />
                    <input
                        placeholder="Bairro"
                        value={entrega.bairro ?? ''}
                        onChange={alterarAtributo('bairro')}
                        autoComplete="address-level4"
                        className="input flex-1"
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                    <input
                        placeholder="Cidade"
                        value={entrega.cidade ?? ''}
                        onChange={alterarAtributo('cidade')}
                        autoComplete="address-level2"
                        className="input flex-1"
                    />
                    <input
                        placeholder="UF (ex: SP)"
                        value={entrega.estado ?? ''}
                        onChange={alterarAtributo('estado')}
                        autoComplete="address-level1"
                        className="input sm:w-24"
                    />
                    <input
                        placeholder="CEP"
                        value={entrega.cep ?? ''}
                        onChange={alterarAtributo('cep')}
                        autoComplete="postal-code"
                        className="input sm:w-36"
                    />
                </div>
            </div>
        </div>
    )
}
