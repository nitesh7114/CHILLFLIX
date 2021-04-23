import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Loginscreen from './screens/Loginscreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch =  useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        //loggedOut
        dispatch(logout());
      }
    });

    return unsubscribe ;

  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Loginscreen />
        ): (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />

            </Route>
          <Route exact path="/">
          <HomeScreen />
          </Route>
        </Switch>
        
          )}
  
      
    </Router>
    </div>
  );
}

export default App;
