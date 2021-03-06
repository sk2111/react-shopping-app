import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUSer} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';
const Header = ({ currentUser, toggleCartHidden, isCartHidden,signOutStart }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {currentUser ?
                    <div className="option" onClick={signOutStart}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signIn">Sign In</Link>
                }
                <CartIcon onClick={()=>toggleCartHidden()}></CartIcon>
            </div>
            {   
                isCartHidden ? null : <CartDropdown></CartDropdown>
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUSer,
        isCartHidden: selectCartHidden
});
const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden()),
        signOutStart:()=>dispatch(signOutStart())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);