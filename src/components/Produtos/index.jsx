import React from "react";
import { useCarrinhoContext } from "@/hooks/useCarrinhoContext"; // import corrigido

const Produtos = () => {
  const {
    carrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade,
  } = useCarrinhoContext();

  return (
    <div>
      <h2>Lista de Produtos</h2>
      {carrinho.map((item) => (
        <div key={item.id}>
          <p>{item.nome} - €{item.preco}</p>
          <p>Quantidade: {item.quantidade}</p>
          <button onClick={() => adicionarProduto(item)}>Adicionar</button>
          <button onClick={() => removerProduto(item.id)}>Remover</button>
          <button onClick={() => removerProdutoCarrinho(item.id)}>
            Remover do carrinho
          </button>
        </div>
      ))}
      <hr />
      <p>Total de itens: {quantidade}</p>
      <p>Valor total: €{valorTotal}</p>
    </div>
  );
};

export default Produtos;

