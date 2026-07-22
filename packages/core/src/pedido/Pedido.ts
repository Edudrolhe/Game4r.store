import ItemPedido from './itemPedido';
import { Status } from './Status';
import { FormaPagamento } from './FormaPagamento';
import PedidoEntrega from './PedidoEntrega';

export default interface Pedido {
    id: number;
    itens: ItemPedido[];
    entrega: PedidoEntrega;
    formaPagamento: FormaPagamento;
    status: Status;
    total: number;
    data: Date;
}
