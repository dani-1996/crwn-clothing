import React, {useState, useEffect} from 'react';
import { Switch, Route,Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up.component/sign-in-and-sign-up.component"
import SignIn from "./components/sign-in/sign-in.component"
import {auth} from "./firebase/firebase.utils";


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  let unsubscribeFromAuth = null
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(currentUser)
    }  ,[currentUser])
   
  })

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
     
      </Switch>

    </div>
  );
}

export default App;