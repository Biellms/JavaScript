class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.idEdit = null;
        this.total = 0;
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
        this.soma();
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

            imgEdit.src = 'img/edit.png';
            imgEdit.setAttribute('onclick', 'produto.startEdit('+ JSON.stringify(this.arrayProdutos[i]) +')');

            imgDelete.src = 'img/delete.png';
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
            document.getElementById('produto').style.border = '1px solid red';
        } else {
            document.getElementById('produto').style.border = '1px solid #ccc';
        }

        if(produto.preco == '') {
            msg += ' INFORME O PREÇO DO PRODUTO!'
            document.getElementById('preco').style.border = '1px solid red';
        } else {
            document.getElementById('preco').style.border = '1px solid #ccc';
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
        this.soma();
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
                produto.preco = parseFloat(produto.preco);
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preco = produto.preco;
            }
        }
    }

    soma() {
        this.total = 0;

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            this.total += this.arrayProdutos[i].preco;
        }

        document.getElementById('valorTotal').innerText = 'Valor total: R$ ' + this.total
    }
}

var produto = new Produto;

function handleOnFocus(x) {
    x.style.border = '1px solid #0A66C2';
}

function handleOnBlur(x) {
    x.style.border = '1px solid #ccc';
}