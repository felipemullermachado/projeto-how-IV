//tabela dinamicamente incluida
//o view vai definir a tabela que será apresentada ao usuário
//o view exibe para o usuário todos os Pedidos criados
class PedidosView{
  //Necessidade de associar o elemento do DOM, a PedidosView
  //quando PedidosView for instanciada em PedidoController,
  //haverá uma referência ao elemento do DOM que é o alvo
  constructor(elemento){
    this._elemento = elemento;
  }

  _template(model) {
        
    return `
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Local</th>
                <th>Ideia</th>
                <th>Tamanho</th>
                <th>Data</th>
                <th>Preço</th>
                <th>Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            ${model.pedidos.map( pedido => {       
              return `
                  <tr>
                    <td>${pedido.id}</td> 
                    <td>${pedido.cliente}</td> 
                    <td>${pedido.local}</td> 
                    <td>${pedido.ideia}</td> 
                    <td>${pedido.tamanho}</td> 
                    <td>${pedido.data}</td> 
                    <td>${pedido.preco}</td> 
                    <td>${pedido.status}</td>
                    <td>
                    <button class="btn-edit" onclick='pedidoController.iniciaEdicao(${JSON.stringify(pedido)})'></button>
                    <button class="btn-delete" onclick="pedidoController.exclui(${pedido.id})"></button>
                    </td> 
                  </tr>
                  `
            }).join('')}
        </tbody>
    </table>
    `;
  }
  //o model representa a listaPedidos
  update(model) {
    //para converter o template() em elemento do DOM
    this._elemento.innerHTML = this._template(model);
  }
}








