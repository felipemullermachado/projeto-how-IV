class ListaPedidosModel{

  constructor(){
    //ListaPedidos será um Array que guarda os pedidos cadastrados
    this._pedidos = [];
  }

  //adiciona o Pedido ao ListaPedidos
  adiciona(pedido){
    this._pedidos.push(pedido);
  }
  
  //remove o Pedido do ListaPedidos
  deleta(pedido){
    this._pedidos.splice(pedido, 1);
  }

  get pedidos(){
    return this._pedidos;
  }
}
