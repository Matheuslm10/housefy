let produtoSelecionado = ProdutoService.buscarProdutoSelecionado()

function carregarProduto() {
    document.getElementById("navbarTitle").innerHTML = produtoSelecionado.nome
    document.getElementById("imagem").src = produtoSelecionado.img
    document.getElementById("nome").innerHTML = produtoSelecionado.nome
    document.getElementById("descricao").innerHTML = produtoSelecionado.descricao
    document.getElementById("preco").innerHTML = produtoSelecionado.preco
}

function voltar() {
    history.go(-1)
}

function adicionarCarrinho(){
    let quantidade = document.getElementById("quantidade").value
    let item = {
        quantidade: quantidade,
        produto: produtoSelecionado
    }
    CarrinhoService.adicionarItem(item)
    
}