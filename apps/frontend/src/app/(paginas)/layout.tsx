import Pagina from '@/src/components/template/Pagina'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout(props: any) {
    return <Pagina>{props.children}</Pagina>
}
