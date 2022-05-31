import React, { Component, useState, useEffect } from "react";
// import {Navbar, Nav, Container, Form, Button, FormControl, Jumbotron} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/** import Screens */
import { Home, Main, Test } from "./screens/DetailScreens/Index";
import Navi from "./screens/DetailScreens/Nav";
import Project from "./views/Dashboard";
import TableList from "./views/TableList";
import UserProfile from "./views/UserProfile";
import Typography from "./views/Typography";
import Login from "Controllers/LoginController";
/** Component import */
import ControlledCarousel from "./screens/Component/ControlledCarousel";

const App = () => {
    return (
        <>
            <header>
                <Navi />
            </header>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/home" component={Home} />
                        <Route path="/main" component={UserProfile}></Route>
                        <Route exact path="/test" component={Typography} />
                        <Route path="/1" component={ControlledCarousel}></Route>
                        <Route path="/2" component={Project}></Route>
                        <Route path="/3" component={TableList} />
                    </Switch>
                </Router>
            </div>
        </>
    );
};

export default App;
