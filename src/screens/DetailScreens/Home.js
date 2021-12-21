import React from 'react';
import background from './../../Image/img1.jpg';

const Home = () =>{

    return(
        <div className="Home" style = {{backgroundImage:{background}}}>
            <h3 style = {{textAlign:"center"}}>Welcome to JH's Blog</h3>
            <img
                style ={{height:"1000px", width : "100%", opacity:0.5}}
                src={background}
                alt="First slide"
            />
            {/* </img> */}
        </div>
    );
};

export default Home;