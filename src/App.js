import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { Axios } from 'axios';
/** import Screens */
import {Home, Main} from './screens/DetailScreens/Index';
import Nav from "./screens/DetailScreens/Nav";

class App extends Component{

    constructor(props){
        super(props)
        this.state={
            host:'',
        }
    }
    // componentDidMount(){
    //     this._getHost();
    // }

    // _getHost = async()=>{
    //     const res = await Axios.get('/api/host');
    //     this.setState({host:res.data.host});
    // }
    render(){
        return(
            <div className='App'>
                {/* <h3>Welcome to <u>{state.host}</u> Blog</h3> */}
                <Router>
                    <Nav />
                    <Route exact path ="/" component ={Home} /> 
                    <Route path ="/main" component ={Main}></Route>
                </Router>
            </div>
        );
    }
};

export default App;