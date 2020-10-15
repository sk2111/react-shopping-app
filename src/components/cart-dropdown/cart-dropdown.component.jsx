import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';

const CartDropdown = ({cartItems,history})=>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {   cartItems.length ?cartItems.map(item=>(<CartItem key={item.id} item={item}></CartItem>))
                    :<span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={()=>history.push('/checkout')}>Go To Checkout</CustomButton>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({ 
        cartItems:selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));