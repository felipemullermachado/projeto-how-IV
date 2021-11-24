//Está incluso na tag form (do HTML) o método atualiza(event);
//o controller orquestra o acesso aos modelos e faz a comunicação entre os mesmos e a View
class PedidoController{

  constructor(){
    this._id = 1;
    let $ = document.querySelector.bind(document);
    this._inputId = $('[data-id]');
    this._inputCliente = $('[data-cliente]');
    this._inputLocal = $('[data-local]');
    this._inputIdeia = $('[data-ideia]');
    this._inputTamanho = $('[data-tamanho]');
    this._inputData = $('[data-data]');
    this._inputPreco = $('[data-preco]');
    this._inputStatus = $('[data-status]');
    this._form = $('[data-form]')
    this._btnForm = $('[data-btn]');
    //para fazer a verificação se o método Editar está ativo
    this._editId = null;
    //para acessar os métodos de ListaPedidos
    this._listaPedidos = new ListaPedidosModel();
    //ao chamar instanciar o PedidoController, é então criada a tabela no HTML dinamicamente
    this._pedidosView = new PedidosView($('[data-table]'));
    //ao criar um pedido, atualiza-se o view
    //e assim aparecerá a tabela e
    //quando a lista mudar, muda-se a tabela
    this._pedidosView.update(this._listaPedidos);
  }

  atualiza(event){
    event.preventDefault();
    //Para verificar se o método editar está ativo;
    if(this._editId == null){
      //adiciona o pedido criado a ListaPedidos
      this._listaPedidos.adiciona(this._criaPedido());
      this._id = parseInt(this._listaPedidos.pedidos[this._listaPedidos.pedidos.length - 1]._id) + 1;
      alert('Pedido cadastrado com sucesso');
    } else {
      this.edita(this._editId);
    }
    //atualiza a tabela
    this._pedidosView.update(this._listaPedidos);
    this._limpaFormulario();
  }

  exclui(id){
    if(confirm('Deseja realmente remover este pedido?')){
      for (let i = 0; i < this._listaPedidos.pedidos.length; i++){
        if(this._listaPedidos.pedidos[i]._id == id){
          this._listaPedidos.deleta(i);
        }
      }
    }
    this._pedidosView.update(this._listaPedidos);
  }

  iniciaEdicao(dados){
    //Para cair na condição de editar os dados no método atualiza
    this._editId = dados._id;
    
    this._id = dados._id;
    this._inputId.value = dados._id;
    this._inputCliente.value = dados._cliente;
    this._inputLocal.value = dados._local;
    this._inputIdeia.value = dados._ideia;
    this._inputTamanho.value = dados._tamanho;
    this._inputData.value = dados._data;
    this._inputPreco.value = dados._preco;
    this._inputStatus.value = dados._status;

    this._btnForm.innerText = "Editar";
  }

  edita(id){
    for(let i = 0; i < this._listaPedidos.pedidos.length; i++){
      if(this._listaPedidos.pedidos[i]._id == id){
        this._listaPedidos.pedidos[i]._id = this._id;
        this._listaPedidos.pedidos[i]._cliente =  this._inputCliente.value;
        this._listaPedidos.pedidos[i]._local = this._inputLocal.value;
        this._listaPedidos.pedidos[i]._ideia = this._inputIdeia.value;
        this._listaPedidos.pedidos[i]._tamanho = this._inputTamanho.value;
        this._listaPedidos.pedidos[i]._data = this._inputData.value;
        this._listaPedidos.pedidos[i]._preco = this._inputPreco.value;
        this._listaPedidos.pedidos[i]._status = this._inputStatus.value;
        alert("Edição realizada com sucesso");
      }
    }
    
    this._editId = null;
    this._btnForm.innerText = "Cadastrar";
  }

  _criaPedido(){
    return new PedidoModel(
      this._id,
      this._inputCliente.value,
      this._inputLocal.value,
      this._inputIdeia.value,
      this._inputTamanho.value,
      this._inputData.value,
      this._inputPreco.value,
      this._inputStatus.value,
    );
  }

  _limpaFormulario() {
      this._inputId.value = '';
      this._inputCliente.value = '';
      this._inputLocal.value = '';
      this._inputIdeia.value = '';
      this._inputTamanho.value = '';
      this._inputData.value = '';
      this._inputPreco.value = '';
      this._inputStatus.value = '';
      this._inputCliente.focus();
  }
}