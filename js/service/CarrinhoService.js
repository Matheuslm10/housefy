class CarrinhoService {

    static carregarCarrinho(){
        let carrinho = JSON.parse(localStorage.getItem("carrinho"))
        if(!carrinho){
            return []
        } else{
            return carrinho
        }
    }

    static adicionarItem(item){
        let carrinho = CarrinhoService.carregarCarrinho()
        carrinho.push(item)
        CarrinhoService.setCarrinho(carrinho)
        alert("Produto adicionado com sucesso!")
    }

    static setCarrinho(carrinho){
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }

}