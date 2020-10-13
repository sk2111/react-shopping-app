import {cartActionTypes} from './cart.type';
export const toggleCartHidden = () => {
    return{
        type:cartActionTypes.TOGGLE_CART_HIDDEN
    }
};

export const addItem = (item)=>{
    console.log(cartActionTypes);
    return {
        type:cartActionTypes.ADD_ITEM,
        payload:item
    }
}