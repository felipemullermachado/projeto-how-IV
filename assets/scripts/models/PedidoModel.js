class PedidoModel{

  constructor(id, cliente, local, ideia, tamanho, data, preco, status) {
    this._id = id;
    this._cliente = cliente;
    this._local = local;
    this._ideia = ideia;
    this._tamanho = tamanho;
    this._data = data;
    this._preco = preco;
    this._status = status;
  }

  get id(){
    return this._id;
  }

  get cliente(){
    return this._cliente;
  }

  get local(){
    return this._local;
  }

  get ideia(){
    return this._ideia;
  }

  get tamanho(){
    return this._tamanho;
  }

  get data() {
    return this._data;
  }

  get preco(){
    return this._preco;
  }

  get status(){
    return this._status;
  }

}