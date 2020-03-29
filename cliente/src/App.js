
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewAccount from "./components/auth/NewAccount";
import Login from "./components/auth/Login";
import AlertState from './context/alert/alertState';
import inicio from './components/inicio/inicio';
import PetState from './context/pets/PetState';
import InicioApp from './components/inicio/InicioApp';
import NewPet from './components/pets/NewPet';
import ProfileUser from './components/profile/ProfileUser';
import tokenAuth from './config/token';
import AuthState from "./context/authentication/authState";
import PrivateRoute from './components/routes/PrivateRoute';

const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  // console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <PetState>
      <AlertState> 
        <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={inicio} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/new-account" component={NewAccount} />
                <PrivateRoute exact path="/inicio" component={InicioApp}/>
                <PrivateRoute exact path="/new-pet" component={NewPet}/>
                <PrivateRoute exact path="/profile-user" component={ProfileUser}/>
              </Switch>
          </Router>  
        </AuthState>
      </AlertState>
    </PetState>
  );
}
export default App;

