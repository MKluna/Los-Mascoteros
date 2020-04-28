
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import tokenAuth from './config/token';

import NewAccount from "./components/auth/NewAccount";
import Login from "./components/auth/Login";

import AlertState from './context/alert/alertState';

import inicio from './components/inicio/inicio';
import InicioApp from './components/inicio/InicioApp';

import PetState from './context/pets/PetState';
import NewPet from './components/pets/NewPet';

import PetLostState from './context/petLost/PetLostState';

import ProfileUser from './components/profile/ProfileUser';

import AuthState from "./context/authentication/authState";

import PrivateRoute from './components/routes/PrivateRoute';

import formPet from './components/formularioEdicionPet/formPet'
import Form_petLost from './components/petsLost/form_petLost';

const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  // console.log(process.env.REACT_APP_BACKEND_URL);
  
  return (
    <PetState>
      <PetLostState>
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
                  <Route exact path="/form-pet" component={formPet}/>
                  <Route exact path="/form-petLost" component={Form_petLost} />

                </Switch>
            </Router>  
          </AuthState>
        </AlertState>
      </PetLostState>
    </PetState>
  );
}
export default App;

