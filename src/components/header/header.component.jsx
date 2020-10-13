import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {currentUser?
             <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
             :
             <Link className="option" to="/signIn">Sign In</Link>
            }
            <CartIcon></CartIcon>
        </div>
    </div>
);

const mapStateToProps = (state)=>{
    return{ 
        currentUser:state.user.currentUser
    }
}
export default connect(mapStateToProps)(Header);