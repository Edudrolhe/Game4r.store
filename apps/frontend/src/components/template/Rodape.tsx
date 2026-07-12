import Link from 'next/link'
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconBrandYoutube,
} from '@tabler/icons-react'
import Logo from '../shared/Logo'

export default function Rodape() {
    return (
        <footer className="flex flex-col bg-black/30 text-steel mt-10">
            <div className="h-px bg-linear-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
            <div className="container flex flex-col py-8 sm:py-10 gap-8 sm:gap-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                    <Logo />
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-zinc-200 pb-2">Sobre</span>
                        <Link href="/sobre/nossa-historia" className="text-sm hover:text-violet-dark transition-colors">
                            Nossa História
                        </Link>
                        <Link href="/sobre/politica-de-privacidade" className="text-sm hover:text-violet-dark transition-colors">
                            Política de Privacidade
                        </Link>
                        <Link href="/sobre/termos-de-uso" className="text-sm hover:text-violet-dark transition-colors">
                            Termos de Uso
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-zinc-200 pb-2">Contato</span>
                        <a
                            href="mailto:suporte@gam4r.store"
                            className="text-sm text-zinc-300 hover:text-white transition-colors"
                        >
                            suporte@gam4r.store
                        </a>
                        <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-2 justify-center md:justify-start hover:text-violet-dark transition-colors"
                        >
                            <IconBrandWhatsapp size={20} className="text-green-500" />
                            WhatsApp
                        </a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
                    <div className="flex gap-2">
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-violet-dark transition-colors"
                        >
                            <IconBrandYoutube size={28} stroke={1} />
                        </a>
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-violet-dark transition-colors"
                        >
                            <IconBrandInstagram size={28} stroke={1} />
                        </a>
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-violet-dark transition-colors"
                        >
                            <IconBrandFacebook size={28} stroke={1} />
                        </a>
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-violet-dark transition-colors"
                        >
                            <IconBrandLinkedin size={28} stroke={1} />
                        </a>
                    </div>
                    <div className="text-sm text-zinc-500">
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
