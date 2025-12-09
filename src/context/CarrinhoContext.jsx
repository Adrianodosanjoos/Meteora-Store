import { createContext, useReducer, useState } from "react";
import { carrinhoReducer } from "../reducers/carrinhoReduce";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho"

const estadoInicial = [];

export const CarrinhoProvider = ({children}) => {
    const [carrinho, dispach] = useReducer(carrinhoReducer, estadoInicial)
    const [quantidade, setQuantidade] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    return (
        <CarrinhoContext.Provider value={{ 
            carrinho, 
            dispach,
            quantidade, 
            valorTotal, 
            }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

