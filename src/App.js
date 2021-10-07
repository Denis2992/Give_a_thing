import React, {useState, useEffect, createContext} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import getFirebase from "./components/firebase";
import LogOut from "./components/LogOut";

export const CurrentUserContext = createContext("");

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const firebase = getFirebase();

        if (firebase) {
            firebase.auth().onAuthStateChanged((authUser) => {
                if (authUser) {
                    setCurrentUser(authUser.email);
                } else {
                    setCurrentUser(null);
                }
            });
        }
    }, []);

  return (
      <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
          <HashRouter>
              <Switch>
                  <Route exact path={"/"} component={Home} />
                  <Route path={"/logowanie"} component={Login} />
                  <Route path={"/rejestracja"} component={Registration} />
                  <Route path={"/wylogowano"} component={LogOut} />
              </Switch>
          </HashRouter>
      </CurrentUserContext.Provider>

  );
}

export default App;
