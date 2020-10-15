import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUSer } from './redux/user/user.selectors';
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        })
      }
      else {
        setCurrentUser(null);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  redirectHandler = () => {
    return this.props.currentUser ? (<Redirect to="/"></Redirect>) : (<SignInAndSignUpPage></SignInAndSignUpPage>);
  }
  render() {
    console.log("I am App and I am rendering");
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" render={this.redirectHandler}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUSer
});
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
