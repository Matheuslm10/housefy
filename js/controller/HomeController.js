let produtosCadastrados = ProdutoService.buscarTodos()

function listarProdutos() {

    document.querySelector('body').style.animation = "zoom-out 0.5s"

    for (let i = 0; i < produtosCadastrados.length; i++) {

        const element = produtosCadastrados[i];

        document.getElementById("produtos").innerHTML +=
            /*html*/
            `
            <div class="card-produto" onClick="selecionarProdutos(${i})">
                <img src=${element.img} alt="Sofá">
                <div class="card-produto-descricao">
                    <h2>${element.nome}</h2>
                    <p>${element.descricao}</p>
                    <p>${element.preco}</p>
                </div>
            </div>
            
            `
    }
    setTimeout(() => {
        document.querySelector('body').style.opacity = 1
    }, 500);
}

function selecionarProdutos(i) {
    ProdutoService.selecionarProduto(produtosCadastrados[i])
    document.querySelector('body').style.animation = "zoom-in 0.5s"
    setTimeout(() => {
        location.href = "produto.html"
    }, 450);
}

function openDrawer() {
    document.querySelector('.drawer-menu').style.animation = 'abrir-menu 0.3s ease'
    document.querySelector('.drawer').style.animation = 'fade-in-fundo 0.3s ease'
    setTimeout(() => {
        document.querySelector('.drawer').style.display = 'flex'
        document.querySelector('body').style.overflowY = 'hidden'
    }, 300);
}

function closeDrawer() {
    document.querySelector('.drawer-menu').style.animation = 'fechar-menu 0.3s ease'
    document.querySelector('.drawer').style.animation = 'fade-out-fundo 0.3s ease'
    setTimeout(() => {
        document.querySelector('.drawer').style.display = 'none'
        document.querySelector('body').style.overflowY = 'scroll'
    }, 300);


}