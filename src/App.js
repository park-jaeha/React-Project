import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
//import Home from './screens/DetailScreens/Home';
/** import Screens */
//import {Home, Main} from './screens/DetailScreens/Index';
import HomePage from "./screens/DetailScreens/Home";
import MainPage from "./screens/DetailScreens/Main";
import Nav from "./screens/DetailScreens/Nav";

const App= ()=> {
    return(
        <div className='App'>
            {/* <HomePage></HomePage> */}
            <Router>
                <Route path ="/" component ={HomePage} /> 
                <Route path ="/main"> <MainPage /></Route>
            </Router>
            {/* <HomePage /> */}
        </div>
    );
};

export default App;