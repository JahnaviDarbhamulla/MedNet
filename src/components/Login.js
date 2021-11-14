import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Nav from './nav'
import Sec2 from './section-2'
import Sec6 from './section-6'
import Sec3 from './section-3'


import { GoogleOutlined } from '@ant-design/icons' ;
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './firebase.js';
import { AuthProvider } from "../contexts/AuthContext"



import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="app-wrapper">
      <Nav />
      <header id="About">
        <div className="intro-logo jumbo-bg">


          <img
            src="./Lifesavers - Using Computer.png"
            className=""
            alt=""
          />
          <div>
            <p className="login__text">
              Doctor's advice? One text away. Keep your loved ones in the loop.{" "}
              <span className="blue__text"> We're here to help! </span>
            </p>
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

        <style jsx>{`
          .login__text {
            color:white;
            margin-left:18%;
            width:70%;
            font-size: 2rem;
            font-weight: 900;
            font-family: poppins, sans-serif;

          }
          @media (max-width: 600px) {
            .login__text {
              color:white;
              margin-left:18%;
              width:70%;
              font-size: 1.5rem;
              font-weight: 900;
              font-family: poppins, sans-serif;

            }
          }
          .blue__text {
            color: #31b9ed;
          }


          header {
            margin-bottom: 1rem;
            height: 100vh;
          }
          .intro-logo {
            display: flex;
            position: absolute;
            top: 5em;
            bottom: 0;
            left: 0;
            right: 0;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            text-align: center;
          }

          .intro-logo h1 {
            font-size: 1.8em;
            font-weight: 900;
            font-family: 'Philosopher', sans-serif;
            color: var(--brand-color);
          }
          @media (min-width: 768px) {
            .intro-logo h1 {
              font-size: 3.5em;
            }
          }
          .intro-logo h3 {
            font-size: 1rem;
            font-weight: 300;
            color: var(--gray-color-1);
            margin-bottom: 3em;
          }

          .intro-logo img {
            max-width: 95%;
            height: auto;
          }
          .company-icons__item + .company-icons__item {
            margin-left: 1rem;
          }
          @media (min-width: 575px) {
            .company-icons__item + .company-icons__item {
              margin-left: 2rem;
            }
          }
          .company-icons__item i {
            margin-right: 5px;
          }
          .intro-button {
            margin-top: 2.3em;
            margin-bottom: 3em;
          }
          .intro-button a {
            padding: 0.65em 2.6em;
            border-radius: 20px;
            color: var(--brand-color);
            border: 1.8px solid var(--brand-color);
            background: white;
            transition: all 0.5s;
          }
          .intro-button a:hover {
            background-color: var(--brand-color);
            color: white;
          }

          .company-icons {
            color: var(--gray-color-2);
            font-size: 0.95em;
          }
          .company-icons__item {
            transition: all 0.5s;
          }
          .company-icons__item:hover {
            color: var(--brand-color);
            cursor: pointer;
          }
        `}</style>
      </header>
      <Sec2 />
      <Sec6 />
<Sec3 />


      <footer class="site-footer">

        <div class="container">

          <div class="row">

            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
           <a href="#"> MedNet</a>.
              </p>

            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a class="twitter" href="#About"><i class="fa fa-twitter"></i></a></li>
                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
  </footer>
      <style jsx global>{`
        .intro-button {
          margin-top: 2.3em;
          margin-bottom: 3em;
        }
        .intro-button a {
          padding: 0.65em 2.6em;
          border-radius: 20px;
          color: var(--brand-color);
          border: 1.8px solid var(--brand-color);
          background: white;
          transition: all 0.5s;
        }
        .intro-button a:hover {
          background-color: var(--brand-color);
          color: white;
        }
        .site-footer
        {
          background-color:#26272b;
          padding:45px 0 20px;
          font-size:15px;
          line-height:24px;
          color:#737373;
        }
        .site-footer hr
        {
          border-top-color:#bbb;
          opacity:0.5
        }
        .site-footer hr.small
        {
          margin:20px 0
        }
        .site-footer h6
        {
          color:#fff;
          font-size:16px;
          text-transform:uppercase;
          margin-top:5px;
          letter-spacing:2px
        }
        .site-footer a
        {
          color:#737373;
        }
        .site-footer a:hover
        {
          color:#3366cc;
          text-decoration:none;
        }
        .footer-links
        {
          padding-left:0;
          list-style:none
        }
        .footer-links li
        {
          display:block
        }
        .footer-links a
        {
          color:#737373
        }
        .footer-links a:active,.footer-links a:focus,.footer-links a:hover
        {
          color:#3366cc;
          text-decoration:none;
        }
        .footer-links.inline li
        {
          display:inline-block
        }
        .site-footer .social-icons
        {
          text-align:right
        }
        .site-footer .social-icons a
        {
          width:40px;
          height:40px;
          line-height:40px;
          margin-left:6px;
          margin-right:0;
          border-radius:100%;
          background-color:#33353d
        }
        .copyright-text
        {
          margin:0
        }
        @media (max-width:991px)
        {
          .site-footer [class^=col-]
          {
            margin-bottom:30px
          }
        }
        @media (max-width:767px)
        {
          .site-footer
          {
            padding-bottom:0
          }
          .site-footer .copyright-text,.site-footer .social-icons
          {
            text-align:center
          }
        }
        .social-icons
        {
          padding-left:0;
          margin-bottom:0;
          list-style:none
        }
        .social-icons li
        {
          display:inline-block;
          margin-bottom:4px
        }
        .social-icons li.title
        {
          margin-right:15px;
          text-transform:uppercase;
          color:#96a2b2;
          font-weight:700;
          font-size:13px
        }
        .social-icons a{
          background-color:#eceeef;
          color:#818a91;
          font-size:16px;
          display:inline-block;
          line-height:44px;
          width:44px;
          height:44px;
          text-align:center;
          margin-right:8px;
          border-radius:100%;
          -webkit-transition:all .2s linear;
          -o-transition:all .2s linear;
          transition:all .2s linear
        }
        .social-icons a:active,.social-icons a:focus,.social-icons a:hover
        {
          color:#fff;
          background-color:#29aafe
        }
        .social-icons.size-sm a
        {
          line-height:34px;
          height:34px;
          width:34px;
          font-size:14px
        }
        .social-icons a.facebook:hover
        {
          background-color:#3b5998
        }
        .social-icons a.twitter:hover
        {
          background-color:#00aced
        }
        .social-icons a.linkedin:hover
        {
          background-color:#007bb6
        }
        .social-icons a.dribbble:hover
        {
          background-color:#ea4c89
        }
        @media (max-width:767px)
        {
          .social-icons li.title
          {
            display:block;
            margin-right:0;
            font-weight:600
          }
        }
        .site-footer-middle
        {
          background-color:white;
          padding:45px 0 20px;
          font-size:15px;
          line-height:24px;
          color:#737373;
        }
        .app-wrapper {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol';
          font-size: 14px;
          --brand-color: rgb(0, 110, 255);
          --gray-color-1: #777;
          --gray-color-2: #555;
        }
        a {
          color: inherit;
        }
        a:hover {
          text-decoration: none;
        }
        .jumbo-bg {
          background: #090c74;
          background-image: url(https://bootstrapmade.com/demo/themes/eStartup/img/hero-bg.png);
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: 100%;
        }
        @media (min-width: 1024px) {
          .jumbo-bg {
            background-attachment: fixed;
          }
        }
      `}</style>
    </div>
  );
}

export default Login ;
