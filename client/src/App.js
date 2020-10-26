import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './global.styles.scss';
import Header from './components/header/header.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUSer } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));


const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  const redirectHandler = () => {
    return currentUser ? (<Redirect to="/"></Redirect>) : (<SignInAndSignUpPage></SignInAndSignUpPage>);
  }
  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner></Spinner>}>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/shop" component={ShopPage}></Route>
            <Route exact path="/signin" render={redirectHandler}></Route>
            <Route exact path="/checkout" component={CheckoutPage}></Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUSer
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
