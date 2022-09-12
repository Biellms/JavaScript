class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.idEdit = null;
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            if (this.idEdit == null) {
                this.adicionar(produto);    
            } else {
                this.atualizar(this.idEdit, produto);
            }
        }
        
        this.listaTabela();
        this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) { 
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nomeProduto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_acoes = tr.insertCell();
            let imgEdit = document.createElement('img');
            let imgDelete = document.createElement('img');

            imgEdit.src = './img/edit.png';
            imgEdit.setAttribute('onclick', 'produto.startEdit('+ JSON.stringify(this.arrayProdutos[i]) +')');

            imgDelete.src = './img/delete.png';
            imgDelete.setAttribute('onclick', 'produto.deletar('+ JSON.stringify(this.arrayProdutos[i]) +')'); 

            td_id.innerText = this.arrayProdutos[i].id;
            td_nomeProduto.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = 'R$ '+this.arrayProdutos[i].preco;
            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    }

    adicionar(produto) {
        produto.preco = parseFloat(produto.preco);
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados() {
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }

    validaCampos(produto) {
        let msg = '';

        if(produto.nomeProduto == '') {
           msg += ' INFORME O NOME DO PRODUTO! \n'
        }

        if(produto.preco == '') {
            msg += ' INFORME O PREÇO DO PRODUTO!' 
        }

        if (msg != '') {
            alert(msg)
            return false;
        }

        return true;
    }

    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
        
        document.getElementById('buttonProduto').innerText = 'Salvar';
        
        this.idEdit = null;
    }

    deletar(dados) {
        if(confirm('Você realmente deseja deletar o produto "' + dados.nomeProduto + '"?')) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == dados.id) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        } 
    }

    startEdit(dados) {
        this.idEdit = dados.id;

        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('preco').value = dados.preco;

        document.getElementById('buttonProduto').innerText = 'Atualizar';
    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preco = produto.preco;
            }
        }
    }
}

var produto = new Produto;
