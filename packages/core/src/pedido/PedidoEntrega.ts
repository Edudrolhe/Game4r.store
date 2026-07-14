export default interface PedidoEntrega {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
}