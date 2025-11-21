import { useContext } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";

export const useCarrinhoContext = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    function mudarQuantodade(id, quantidade) {
      return  carrinho.map((itemDoCarrinho) => {
            if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
            return itemDoCarrinho
        })
    }

    function adicionarProduto(novoProduto) {
        const temOProduto = carrinho.some((itemDoCarrinho) => 
            itemDoCarrinho.id === novoProduto.id
        );

        if (!temOProduto) {
            novoProduto.quantidade = 1;
            return setCarrinho((carrinhoAnterior) => [
                ...carrinhoAnterior,
                novoProduto,
            ]);
        }

        const carrinhoAtualizado = mudarQuantodade(novoProduto.id, 1);

        setCarrinho([...carrinhoAtualizado]);
    }

    function removerProduto(id) {
        const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
        const ehUltimo = produto.quantidade === 1;
        if (ehUltimo) {
            return setCarrinho((carrinhoAnterior) =>
                carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id !== id)
            );
        }

        const carrinhoAtualizado = mudarQuantodade(id, -1);

        setCarrinho([...carrinhoAtualizado]);
    }

    function removerProdutoCarrinho(id) {
        const produto = carrinho.filter((itemDoCarrinho) => (itemDoCarrinho.id !== id));
        setCarrinho(produto);
    }

    return {
        carrinho,
        setCarrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoCarrinho,
    };
};