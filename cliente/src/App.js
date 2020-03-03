
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewAccount from "./components/auth/NewAccount";
import Login from "./components/auth/Login";
import AlertState from './context/alert/alertState';
import AuthState from "./context/authentication/authState";
import Inicio from './components/inicio/inicio';
import Header from "./components/layout/header";



function App() {
  // console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <AlertState> 
      <AuthState>
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/new-account" component={NewAccount} />
            </Switch>
        </Router>  
      </AuthState>
    </AlertState>
  );
}
export default App;

