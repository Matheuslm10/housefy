let produtoSelecionado = ProdutoService.buscarProdutoSelecionado()

function carregarProduto() {
    document.querySelector('body').style.animation = "zoom-out 0.5s"
    document.getElementById("imagem").src = produtoSelecionado.img
    document.getElementById("navbarTitle").innerHTML = produtoSelecionado.nome
    document.getElementById("nome").innerHTML = produtoSelecionado.nome
    document.getElementById("descricao").innerHTML = produtoSelecionado.descricao
    document.getElementById("preco").innerHTML = produtoSelecionado.preco

    setTimeout(() => {
        document.querySelector('body').style.opacity = 1
    }, 500);

}

function voltar() {
    document.querySelector('body').style.animation = "zoom-in 0.5s"
    setTimeout(() => {
        history.go(-1)
    }, 450);
}

function adicionarCarrinho() {
    let quantidade = document.getElementById("quantidade").value
    let item = {
        quantidade: quantidade,
        produto: produtoSelecionado
    }
    CarrinhoService.adicionarItem(item)
    alert("Produto adicionado com sucesso!")
    document.getElementById("quantidade").value = ""

}