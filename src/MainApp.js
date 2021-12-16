// import React, {Component} from 'react';
// import InsideApp from './Controllers/InsideApp';

// const MainApp = (props) =>{
//   const [count,setCount] = React.useState(0);

//   const handleChange =()=>{
//     setCount(count +1);
//   };

//   return (
//           <div className ="App">
//             <h3>Index props</h3>
//               <div className = "props">
//                 {/** import props */}
//                 <span>{props.message}</span>
//               </div>
//             <h3>State</h3>
//               <div className ="state">
//                 {/** import State */}
//                 {count}
//                 <button onClick = {handleChange}>click here!</button>
//               </div>

//               <h3>App props</h3>
//               <div className ="inside-app-props">
//                 <InsideApp
//                   count ={count}
//                   handleChange={handleChange}
//                 />
//               </div>
//           </div>
//         );
// }
// export default MainApp;
