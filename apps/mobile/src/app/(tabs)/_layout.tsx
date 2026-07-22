import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Cores from '@/data/constants/Cores'

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Cores.PRIMARIA,
                tabBarInactiveTintColor: '#888',
                tabBarStyle: { backgroundColor: '#0D001E', borderTopColor: '#222' },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="carrinho"
                options={{
                    title: 'Carrinho',
                    tabBarIcon: ({ color, size }) => <Ionicons name="cart-outline" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="usuario"
                options={{
                    title: 'Usuario',
                    tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
                }}
            />
        </Tabs>
    )
}
