import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems})=>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(item=>(<CartItem key={item.id} item={item}></CartItem>))
                }
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({ 
        cartItems:selectCartItems
});
export default connect(mapStateToProps)(CartDropdown);