let carrinho = CarrinhoService.carregarCarrinho()

function listarCarrinho() {
    document.querySelector('body').style.animation = "zoom-out 0.5s"
    carrinho = CarrinhoService.carregarCarrinho()
    document.getElementById("listaCarrinho").innerHTML = "";

    for (let i = 0; i < carrinho.length; i++) {
        const item = carrinho[i];
        document.getElementById("listaCarrinho").innerHTML +=
            /* html */
            `
            <div class="item-carrinho">
                <div class="imagem">
                    <img src=${item.produto.img}>
                </div>
                <div class="info">
                    <h2>${item.produto.nome}</h2>
                    <span>${item.quantidade}</span>
                    <h3>${item.produto.preco}</h3>
                </div>
                <div class="close">
                <img src="img/close.svg" onclick="remover(${i})">
                </div>
            </div>
            `
    }
}

function remover(i) {
    if (confirm("Tem certeza que quer remover?")) {
        carrinho.splice(i, 1)
        CarrinhoService.setCarrinho(carrinho)
        listarCarrinho();
    }
}

function voltar() {
    document.querySelector('body').style.animation = "zoom-in 0.5s"
    setTimeout(() => {
        history.go(-1)
    }, 350);
}