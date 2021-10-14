import React, {useState, useEffect, createContext} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import getFirebase from "./components/firebase";
import LogOut from "./components/LogOut";
import GiveThings from "./components/GiveThings";

export const CurrentUserContext = createContext("");

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [foundations, setFoundations] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [local, setLocal] = useState([]);


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
        }},[])
    //
    //     const fetchFoundations = async () => {
    //         try {
    //             if (!firebase) return;
    //             const db = firebase.firestore();
    //             const ref = db.collection("foundations");
    //
    //             const docs = await ref.get();
    //
    //             let allFoundations = [];
    //             docs.forEach((doc) => {
    //                 const data = doc.data();
    //                 allFoundations.push(data);
    //             });
    //             setFoundations(allFoundations);
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };
    //
    //     fetchFoundations();
    //
    //     const fetchOrganizations = async () => {
    //         try {
    //             if (!firebase) return;
    //             const db = firebase.firestore();
    //             const ref = db.collection("organizations");
    //
    //             const docs = await ref.get();
    //
    //             let allOrganizations = [];
    //             docs.forEach((doc) => {
    //                 const data = doc.data();
    //                 allOrganizations.push(data);
    //             });
    //             setOrganizations(allOrganizations);
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };
    //
    //     fetchOrganizations();
    //
    //     const fetchLocal = async () => {
    //         try {
    //             if (!firebase) return;
    //             const db = firebase.firestore();
    //             const ref = db.collection("local");
    //
    //             const docs = await ref.get();
    //
    //             let allLocal = [];
    //             docs.forEach((doc) => {
    //                 const data = doc.data();
    //                 allLocal.push(data);
    //             });
    //             setLocal(allLocal);
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };
    //
    //     fetchLocal();
    // }, []);

  return (
      <CurrentUserContext.Provider
          value={{currentUser, setCurrentUser, foundations, organizations, local}}>
          <HashRouter>
              <Switch>
                  <Route exact path={"/"} component={Home} />
                  <Route path={"/logowanie"} component={Login} />
                  <Route path={"/rejestracja"} component={Registration} />
                  <Route path={"/wylogowano"} component={LogOut} />
                  <Route path={"/oddaj-rzeczy"} component={GiveThings}/>
              </Switch>
          </HashRouter>
      </CurrentUserContext.Provider>

  );
}

export default App;
