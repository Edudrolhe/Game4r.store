import { Stack } from 'expo-router'
import { ProvedorCarrinho } from '@/data/contexts/ContextoCarrinho'
import { ProvedorPagamento } from '@/data/contexts/ContextoPagamento'
import { ProvedorProdutos } from '@/data/contexts/ContextoProdutos'
import { ProvedorUsuario } from '@/data/contexts/ContextoUsuario'

export default function RootLayout() {
    return (
        <ProvedorUsuario>
            <ProvedorProdutos>
                <ProvedorCarrinho>
                    <ProvedorPagamento>
                        <Stack screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="(tabs)" />
                            <Stack.Screen
                                name="(stack)/produto/[id]"
                                options={{ title: 'Detalhes do Produto', headerShown: true, headerStyle: { backgroundColor: '#0D001E' }, headerTintColor: '#FFF' }}
                            />
                            <Stack.Screen
                                name="(stack)/pagamento"
                                options={{ title: 'Pagamento', headerShown: true, headerStyle: { backgroundColor: '#0D001E' }, headerTintColor: '#FFF' }}
                            />
                            <Stack.Screen
                                name="(stack)/sucesso"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="(stack)/ultimas-compras"
                                options={{ title: 'Ultimas Compras', headerShown: true, headerStyle: { backgroundColor: '#0D001E' }, headerTintColor: '#FFF' }}
                            />
                            <Stack.Screen
                                name="(stack)/login"
                                options={{ title: 'Login', headerShown: true, headerStyle: { backgroundColor: '#0D001E' }, headerTintColor: '#FFF' }}
                            />
                            <Stack.Screen
                                name="(stack)/cadastro"
                                options={{ title: 'Cadastro', headerShown: true, headerStyle: { backgroundColor: '#0D001E' }, headerTintColor: '#FFF' }}
                            />
                            <Stack.Screen
                                name="(stack)/nossa-historia"
                                options={{ title: 'Nossa História', headerShown: true, headerStyle: { backgroundColor: '#0D001E' }, headerTintColor: '#FFF' }}
                            />
                            <Stack.Screen
                                name="(stack)/politica-de-privacidade"
                                options={{ title: 'Política de Privacidade', headerShown: true, headerStyle: { backgroundColor: '#0D001E' }, headerTintColor: '#FFF' }}
                            />
                            <Stack.Screen
                                name="(stack)/termos-de-uso"
                                options={{ title: 'Termos de Uso', headerShown: true, headerStyle: { backgroundColor: '#0D001E' }, headerTintColor: '#FFF' }}
                            />
                        </Stack>
                    </ProvedorPagamento>
                </ProvedorCarrinho>
            </ProvedorProdutos>
        </ProvedorUsuario>
    )
}
