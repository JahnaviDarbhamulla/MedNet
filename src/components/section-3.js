import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default () => (
  <section className="s3">
  <br/>
  <br/>
  <br/>

    <Container>

      <Row className="flex-align">
        <Col md="5" lg="3" className="s2__mob-pic">
        <img
          src="https://media2.giphy.com/media/RnqJfQoXk0SgpndsFb/giphy.gif?cid=ecf05e47hmft2ctdmgbbsjxb6hur83k27cqobiqj61zet14x&rid=giphy.gif&ct=s"
          className=""
          alt=""
        />
        </Col>
        <Col md="7" lg="5" className="s2__des">
          <h1>
            <span className="bold">Get In Touch</span>
          </h1>
          <p>
          MedNet can help you stay connected to your loved one's health and medical care.
          For any queries please do contact us.
          </p>
          <div className="intro-button">
            <a  href="mailto:jahnavi.darbhamulla@gmail.com" >Contact Us</a>
          </div>
        </Col>
      </Row>

    </Container>
    <br/>
    <br/>
    <br/>
    <style>{`
        .s2 {
            font-size: 16px;
            margin-top: 4em;
        }
        .s2__mob-pic {
            margin-bottom: 4em;
        }
        @media (min-width: 768px) {
            .s2__mob-pic {
            margin-bottom: 0;
            }
        }

        .s2__mob-pic img {
            max-width: 100%;
        }
        .s2__des h1 {
            font-size: 2.6em;
            font-weight: 100;
            letter-spacing: 2.5px;
        }
        .s2__des .bold{
            font-weight: 700;
        }
        .s2__des p {
            font-weight: 100;
            font-size: .95em;
            line-height: 1.8;
        }
        .s2__des ul {
            font-weight: 100;
            font-size: .9em;
            letter-spacing: 1.5px;
            list-style: none;
            padding: 0;
        }
         .s2__list > li {
            padding: .5em 0;
        }
        .s2__list i {
            margin-right: 1em;
        }
        @media (min-width: 768px) {
            .flex-align {
                justify-content: center;
                align-items: center;
            }
        }

    `}</style>
  </section>
)
