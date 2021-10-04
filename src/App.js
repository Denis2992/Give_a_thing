import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
      <HashRouter>
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/logowanie"} component={Login} />
            <Route path={"/rejestracja"} component={Registration} />
        </Switch>
      </HashRouter>
  );
}

export default App;
