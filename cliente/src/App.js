
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewAccount from "./components/auth/NewAccount";
import Login from "./components/auth/Login";
import AlertState from './context/alert/alertState';
import AuthState from "./context/authentication/authState";
import inicio from './components/inicio/inicio';
import Header from "./components/layout/header";
import InicioApp from './components/inicio/InicioApp';
import Tarjeta from './components/tarjetas/tarjeta';



function App() {
  // console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <AlertState> 
      <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={inicio} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/new-account" component={NewAccount} />
              <Route exact path="/inicio" component={InicioApp}/>
              <Route exact path="/tarjeta" component={Tarjeta}/>
            </Switch>
        </Router>  
      </AuthState>
    </AlertState>
  );
}
export default App;

