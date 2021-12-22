import React from 'react';
import background from './../../Image/img1.jpg';

const Home = () =>{

    return(
        <div className="Home" 
                style = {{
                    // backgroundImage:"url("+background+")",backgroundPosition: 'center',
                    // backgroundSize: 'cover',
                    // backgroundRepeat: 'no-repeat',
                    // opacity:0.5
                }}>
            <img
                style ={{height:"800px", width : "100%", opacity:0.5}}
                src={background}
                alt="First slide"
            /> 
            <h3 style = {{textAlign:"center"}}>Welcome to JH's Blog</h3>
            {/* </img> */}
        </div>
    );
};

export default Home;