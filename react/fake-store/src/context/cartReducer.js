export const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

export const ACTIONS = Object.freeze({
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
});

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      
      let updatedCartItems = [];

      if (existingItem) {
        updatedCartItems = state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      return {
        cartItems: updatedCartItems,
        totalPrice: state.totalPrice + action.payload.price,
        totalItems: state.totalItems + 1,
      };
    }

    case ACTIONS.REMOVE_FROM_CART: {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (!existingItem) return state;
      let updatedCartItems = [];

      if (existingItem.quantity === 1) {
        updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      } else {
        updatedCartItems = state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      return {
        cartItems: updatedCartItems,
        totalPrice: state.totalPrice - existingItem.price,
        totalItems: state.totalItems - 1,
      };
    }

    case ACTIONS.CLEAR_CART: {
      return {
        cartItems: [],
        totalPrice: 0,
        totalItems: 0,
      };
    }

    default:
      return state;
  }
};
