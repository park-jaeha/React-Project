import React, { Component, useState, useEffect } from 'react';
// import {Navbar, Nav, Container, Form, Button, FormControl, Jumbotron} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Axios } from 'axios';
/** import Screens */
import {Home, Main, Test} from './screens/DetailScreens/Index';
import Navi from "./screens/DetailScreens/Nav";
import Project from './views/Dashboard';
import Map from './views/Maps';
import TableList from './views/TableList';
/** Component import */
import ControlledCarousel from './screens/Component/ControlledCarousel';

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
                <Switch>
                    <Route exact path ="/" component ={Home} />
                    <Route exact path ="/test" component ={Test} /> 
                    <Route path ="/main" component ={Main}></Route>
                    <Route path ="/1" component ={ControlledCarousel}></Route>
                    <Route path ="/2" component ={Project}></Route>
                    <Route path ="/3" component = {TableList}/>
                </Switch>
            </Router>
        </div>
        </>
    );
}

export default App;