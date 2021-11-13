import React from 'react';
import { GoogleOutlined } from '@ant-design/icons' ;
import "bootstrap/dist/css/bootstrap.min.css";


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
          <div className="header__option">
            <a href="./AbtUs">
              {" "}
              <button className="navbutton">About Us</button>
            </a>
            <a href="./ContUs">
              <button className="navbutton">Contact Us</button>
            </a>
          </div>
        </div>
      </div>
   <div className="login__container container-fluid row">
     <div className="leftside col-lg-6">
       <div className="class1">
         <div className="">
           <img
             alt="titleImage"
             src="/Lifesavers - Family.png"
           ></img>
         </div>

         <div>
           <p className="login__text">
             Your One stop destination for prescriptions.{" "}
             <span className="blue__text"> We’re here to help. </span>
           </p>
         </div>
       </div>
     </div>

     <div className="rightside col-lg-6">


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
