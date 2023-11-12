import { CartItem, CartState } from '@/context/CartContext';

type Action = {
    type: 'ADD_TO_CART' | 'REMOVE_FROM_CART';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any;
};

export const cartReducer = (state: CartState, action: Action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const { id, name, price, quantity } = action.payload;

            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                const newItem: CartItem = {
                    id,
                    name,
                    price,
                    quantity,
                };

                state.items.push(newItem);
            }

            return state;
        }
        case 'REMOVE_FROM_CART': {
            const id = action.payload;

            const newItems = state.items.filter((item) => item.id !== id);

            return {
                ...state,
                items: newItems,
            };
        }
        default:
            return state;
    }
};
