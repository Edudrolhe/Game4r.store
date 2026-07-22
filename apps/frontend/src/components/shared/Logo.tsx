import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-1 sm:gap-1">
            <Image
                src="/logo.png"
                width={1024}
                height={1052}
                alt="logo"
                priority
                className="w-10 sm:w-[100px] h-auto"
            />
            <Image
                src="/logo-texto.png"
                width={2928}
                height={231}
                alt="logo"
                priority
                className="w-36 sm:w-[420px] h-auto"
            />
        </Link>
    )
}
