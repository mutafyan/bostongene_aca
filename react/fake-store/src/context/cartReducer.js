export const initialState = {
  cartItems: [],
};

export const ACTIONS = Object.freeze({
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
});

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const alreadyAdded = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (alreadyAdded) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 } // ++ the quantity if already in cart
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }], // item new to cart
        };
      }
    }
    case ACTIONS.REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }
    case ACTIONS.CLEAR_CART: {
      return {
        ...state,
        cartItems: [],
      };
    }
    default: {
      return state;
    }
  }
};
