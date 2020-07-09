import React from "react";
import { Login, Home } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
