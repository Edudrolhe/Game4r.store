import ItemPedido from './itemPedido';
import { Staus } from './Staus';
import { FormaPagamento } from './FormaPagamento';
import PedidoEntrega from './PedidoEntrega';

export default interface Pedido {
    id: number;
    itens: ItemPedido[];
    entrega: PedidoEntrega;
    formaPagamento: FormaPagamento;
    status: Staus;
    total: number;
    data: Date;
}
