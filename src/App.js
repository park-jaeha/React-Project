import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
/** import Screens */
//import {Home, Main} from './screens/DetailScreens/Index';
import HomePage from "./screens/DetailScreens/Home";
import MainPage from "./screens/DetailScreens/Main";
import Nav from "./screens/DetailScreens/Nav";

const App= ()=> {
    return(
        <div className='App'>
            <BrowserRouter>
                <Nav />
                <Route exact path ="/"><HomePage /></Route> 
                <Route path ="/main"> <MainPage /></Route>
            </BrowserRouter>
        </div>
    );
};

export default App;