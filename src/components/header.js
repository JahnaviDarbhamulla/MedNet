import React from 'react'
import { Container, Jumbotron } from 'reactstrap'
import firebase from "firebase/app";
import { GoogleOutlined } from '@ant-design/icons' ;
import { auth } from './firebase.js';

const Header = () => {
  return (
    <header>
      <div className="intro-logo jumbo-bg">


        <img
          src="./Lifesavers - Front Desk (1).png"
          className=""
          alt=""
        />
        <div>
          <p className="login__text">
            Doctor's advice? One text away. Keep your loved ones in the loop.{" "}
            <span className="blue__text"> We're here to help! </span>
          </p>
        </div>
        <div className="intro-button" onClick ={() => auth.signInWithRedirect (new firebase.auth.GoogleAuthProvider())}>
          <a href="">Sign In with Google</a>
        </div>

      </div>

      <style jsx>{`
        .login__text {
          color:#080a53;
          margin-left:18%;
          width:70%;
          font-size: 2rem;
          font-weight: 900;
          font-family: poppins, sans-serif;

        }
        .blue__text {
          color: white;
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
  )
}

export default Header
