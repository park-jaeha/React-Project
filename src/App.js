import React, { Component, useState, useEffect } from 'react';
// import {Navbar, Nav, Container, Form, Button, FormControl, Jumbotron} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Axios } from 'axios';
/** import Screens */
import {Home, Main, Test} from './screens/DetailScreens/Index';
import Navi from "./screens/DetailScreens/Nav";

const App =() =>{

    const [state,setState] = useState({host:''});
    useEffect((props)=>{
        componentDidMount();
        console.log(state);
    },[]);

    const _getHost = async()=>{
        const res = await Axios.get('/api/host');
        setState({host:res.data.host});
        console.log(state);
    }
    const componentDidMount = () => {
        _getHost();
    }
    return(
        <>
        <header>
        <Navi />
        </header>
        <div className='App'>
        <Router>
            <Route exact path ="/home" component ={Home} />
            <Route exact path ="/test" component ={Test} /> 
            <Route path ="/main" component ={Main}></Route>
        </Router>
        </div>
        </>
    );
}

export default App;