
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NuevaCuenta from "./components/auth/NuevaCuenta";



function App() {
  // console.log(process.env.REACT_APP_BACKEND_URL);
  return (
            <Router>
              {/* <Header/> */}
              <Switch>
                <Route exact path="/" component={Login} />

                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />

              </Switch>
            </Router>    
  );
}
export default App;

