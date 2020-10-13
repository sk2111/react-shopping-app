import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user){
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
          });
        })
      }
      else{
        setCurrentUser(null);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={shopPage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}
export default connect(null,mapDispatchToProps)(App);
