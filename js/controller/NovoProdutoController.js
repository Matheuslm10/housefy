document.querySelector('body').style.animation = "zoom-out 0.4s"

setTimeout(() => {
    document.querySelector('body').style.opacity = "1"
}, 400);

function voltar() {
    document.querySelector('body').style.animation = "zoom-in 0.5s"
    setTimeout(() => {
        history.go(-1)
    }, 450);
}

function salvar(){
    let produto = {}
    produto.img = document.getElementById('imagem').value
    produto.nome = document.getElementById('nome').value
    produto.descricao = document.getElementById('descricao').value
    produto.preco = document.getElementById('preco').value
    
    ProdutoService.cadastrar(produto)
    alert("Produto salvo com sucesso!")

    document.querySelector('body').style.animation = "zoom-in 0.5s"
    
    setTimeout(() => {
        location.href = "home.html"
    }, 450);

}
