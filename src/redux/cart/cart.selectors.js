import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart],(cart)=>{
    return cart.cartItems
});

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        return cartItems.reduce((accQuantity,item)=>accQuantity+item.quantity,0)
    }
);
