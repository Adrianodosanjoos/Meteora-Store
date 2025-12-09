export const ADD_PRODUTO = "ADD_PRODUTO";
export const REOMOVE_PRODUTO = "REMOVE_PRODUTO";
export const UPDATE_QUANTIDADE = "UPDATE_QUANTIDADE";

export const carrinhoReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUTO:
            const novoPrduto = action.payload
            const produto = state.findIndex((item) => item.id === novoPrduto.id);
            if (produto === -1) {
                return [...state, novoPrduto];
            } else {
                return state.map((item, index) =>
                    index === produto
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            }
        case REOMOVE_PRODUTO:
            const produtoId = action.payload;
            return state.filter((item) => item.id !== produtoId);

            case UPDATE_QUANTIDADE:
                const { produtoId: id, quantidade } = action.payload;
                return state.map((item) =>
                item.id === id ? { ...item, quantidade } : item 
            );

            default:
                return state;
    }
};
