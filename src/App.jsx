import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
import Login from './components/Login';
import Loading from './components/Loading';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/firebase'

import { AppBody } from './styles/appbody.styles';

function App() {
  const [user, loading] = useAuthState(auth)

  if(loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="app">
     <Router>
       {!user ? (
          <Login />
       ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
       )}
      
    </Router>
    </div>
  );
}

export default App;