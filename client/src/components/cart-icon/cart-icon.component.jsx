import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
const CartIcon = ({ itemCount,...props }) => {
    return (
        <div className="cart-icon" onClick={props.onClick}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
        itemCount: selectCartItemsCount
});
export default connect(mapStateToProps)(CartIcon);