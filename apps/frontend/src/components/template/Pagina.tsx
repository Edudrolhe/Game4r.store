import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

export interface PaginaProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
    className?: string
    semCabecalho?: boolean
    semRodape?: boolean
}

export default function Pagina(props: PaginaProps) {
    return (
        <div
            className="flex flex-col min-h-screen"
            style={{ background: 'radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)' }}
        >
            <div
                className="flex-1 flex flex-col w-full"
                style={{ background: 'url("/background.png")' }}
            >
                {!props.semCabecalho && <Cabecalho />}
                <main className={`flex-1 flex flex-col ${props.className ?? ''}`}>
                    {props.children}
                </main>
                {!props.semRodape && <Rodape />}
            </div>
        </div>
    )
}
