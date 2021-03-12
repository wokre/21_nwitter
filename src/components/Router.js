import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../routes/Home";
import Auth from "../routes/Auth";

const AppRouter = (isLoggedIn) => {
    console.log(isLoggedIn)
    return (
        <Router>
            <Switch>
                {isLoggedIn ?
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </>
                    : <Route exact path="/"><Auth /></Route>}
            </Switch>
        </Router>
    );
};

export default AppRouter;