
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewAccount from "./components/auth/NewAccount";
import Login from "./components/auth/Login";
import AlertState from './context/alert/alertState';
import AuthState from "./context/authentication/authState";
import inicio from './components/inicio/inicio';
import PetState from './context/pets/PetState';
import InicioApp from './components/inicio/InicioApp';
import NewPet from './components/pets/NewPet';
import ProfileUser from './components/profile/ProfileUser'


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
                <Route exact path="/inicio" component={InicioApp}/>
                <Route exact path="/new-pet" component={NewPet}/>
                <Route exact path="/profile-user" component={ProfileUser}/>
              </Switch>
          </Router>  
        </AuthState>
      </AlertState>
    </PetState>
  );
}
export default App;

