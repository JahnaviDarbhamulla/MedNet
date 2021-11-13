import React from 'react';
import { GoogleOutlined } from '@ant-design/icons' ;
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './firebase.js';
import { AuthProvider } from "../contexts/AuthContext"


import AboutUs from "./AboutUs";
import { Link } from 'react-router-dom';


const Login = () => {
    return(
      <div>
      <div className="header">
        <div className="header__logo">
          <h3>
            MED<span className="bluefont">NET.</span>
          </h3>
        </div>
        <div className="header__nav">
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/AboutUs" component={AboutUs} />

            </Switch>
            </AuthProvider>
        </Router>
          <div className="header__option">
          <Link to="./AboutUs">

            <button className="navbutton">About Us</button>
          </Link>
            // <Link to="./ContUs">
            //   <button className="navbutton">Contact Us</button>
            // </Link>
          </div>
        </div>
      </div>
   <div className="login__container container-fluid row">
     <div className="leftside col-lg-6">
       <div className="class1">
         <div className="">
           <img
             alt="titleImage"
             src="/Lifesavers - Using Computer.png"
           ></img>
         </div>

         <div>
           <p className="login__text">
             Doctor's advice? One text away. Keep your loved ones in the loop.{" "}
             <span className="blue__text"> We're here to help! </span>
           </p>
         </div>
       </div>
     </div>

     <div className="rightside col-lg-6"

          onClick ={() => auth.signInWithRedirect (new firebase.auth.GoogleAuthProvider())} >

          <button
             type="submit "
             className="btn  btn-primary btn-lg btn-block"
          >

          <GoogleOutlined/> Sign in with Google
          </button>


     </div>
   </div>
 </div>

    );
}

export default Login ;
