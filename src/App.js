import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
//import Home from './screens/DetailScreens/Home';
/** import Screens */
import {Home, Main} from './screens/DetailScreens/Index';
// import HomePage from "./screens/DetailScreens/Home";
// import MainPage from "./screens/DetailScreens/Main";
import Nav from "./screens/DetailScreens/Nav";

const App= ()=> {
    return(
        <div className='App'>
            <Router>
                <Nav />
                <Route exact path ="/" component ={Home} /> 
                <Route path ="/main" component ={Main}></Route>
            </Router>
        </div>
    );
};

export default App;