import actionTypes from '../actions/action-types';

export const cartReducer = (state = { cartItems: [] }, action={}) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.cartItems.find((findingItem) => findingItem.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((mappedItem) =>
            mappedItem.product === existItem.product ? item : mappedItem
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    }
    case actionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((filteredItem) => filteredItem.product !== action.payload),
      };
    default:
      return state;
  }
};