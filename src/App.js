import React, { Component, useState, useEffect } from 'react';
import {Navbar, Nav, Container, Form, Button, FormControl, Jumbotron} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Axios } from 'axios';
/** import Screens */
import {Home, Main} from './screens/DetailScreens/Index';
import Navi from "./screens/DetailScreens/Nav";

const App =() =>{

    const [state,setState] = useState({host:''});
    useEffect((props)=>{
        componentDidMount();
        console.log(state);
    },[]);
    useEffect(()=>{
        componentDidMount();   //실행시 바로 조회 후 화면 출력
    });

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
        <h3>Welcome to <u>{state.host}</u> Blog</h3>
        <Router>
            {/* <Route path ="/" component ={Navi} /> */}
            <Route exact path ="/test" component ={Home} /> 
            <Route path ="/main" component ={Main}></Route>
        </Router>
        </div>
        </>
    );
}

export default App;