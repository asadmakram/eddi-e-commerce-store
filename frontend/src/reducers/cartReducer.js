import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  const item = action.payload;
  switch (action.type) {
    case CART_ADD_ITEM: {
      const alreadyExists = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (alreadyExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === item.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    }
    case CART_REMOVE_ITEM: {
      const id = item;
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== id),
      };
    }
    default: {
      return state;
    }
  }
};
