import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Convert from "./components/calc_and_convert/Convert";
import Contacts from "./components/contacts/Contacts";
import Main from "./components/main/Main";
import Tests from "./components/tests/Tests";
import Calculator from "./components/calc_and_convert/Calculator";
import Test from "./components/tests/Test";
import Result from "./components/tests/Result";
import { BoolReducer } from "./Reducer";
import { Context } from "./Context";

function App() {
  const [state1, dispacth1] = useReducer(BoolReducer, false);
  const [state2, dispacth2] = useReducer(BoolReducer, false);

  return (
    <Context.Provider value={{ test: { dispacth1 }, result: { dispacth2 } }}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home" component={Main} exact />
            <Route path="/tests" component={Tests} exact />
            {state1 ? (
              <Route path="/tests/test" component={Test} exact />
            ) : null}
            {state2 ? (
              <Route path="/tests/test/result" component={Result} exact />
            ) : null}
            <Route path="/converter" component={Convert} exact />
            <Route path="/calculator" component={Calculator} exact />
            <Route path="/contacts" component={Contacts} exact />
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
