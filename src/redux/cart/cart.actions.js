import {cartActionType} from './cart.type';
const toggleCartHidden = () => {
    return{
        type:cartActionType.TOGGLE_CART_HIDDEN
    }
};
export default toggleCartHidden;