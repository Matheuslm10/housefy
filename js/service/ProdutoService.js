class ProdutoService {

    static validar(produto) {
        if (!produto.nome) {
            return "Ops! O nome do produto é obrigatório."
        }
    }

    static buscarTodos() {

        let produtos = JSON.parse(localStorage.getItem("produtos"))
        
        if(!produtos){
            return []
        } else {
            return produtos
        }
    }

    static selecionarProduto(produto){
        localStorage.setItem("produtoSelecionado", JSON.stringify(produto))
    }

    static buscarProdutoSelecionado() {
        return JSON.parse(localStorage.getItem("produtoSelecionado"))
    }
}

