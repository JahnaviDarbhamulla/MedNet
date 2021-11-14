import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default () => (
  <section className="s6">
  <br/>
  <br/>

    <Container>
      <div className="s6__titles">
        <h1>With Our Application you can</h1>
        <h4>(Hover over to find out)</h4>
      </div>
      <Row>
        <Col md="6" lg="3">
          <div className="s6__frame">
            <img
              src="/Lifesavers - Family.png"
              alt=""
            />
            <div className="s6__in-out-alert">
              <div className="s6__social-icons">

              </div>
  <h3></h3>
              <h3 class="inner_text">Create groups with the name of the patient and add Family members</h3>
            </div>
          </div>
        </Col>
        <Col md="6" lg="3">
          <div className="s6__frame">
            <img
              src="/Lifesavers - Front Desk.png"
              alt=""
            />
            <div className="s6__in-out-alert">
              <div className="s6__social-icons">

              </div>
              <h3></h3>
              <h3 class="inner_text">Send pictures of prescriptions and reports</h3>
            </div>
          </div>
        </Col>
        <Col md="6" lg="3">
          <div className="s6__frame">
            <img
              src="/Lifesavers - One on One.png"
              alt=""
            />
            <div className="s6__in-out-alert">
              <div className="s6__social-icons">

              </div>
  <h3></h3>
              <h3 class="inner_text">Get transcripts of the appointments</h3>
            </div>
          </div>
        </Col>
        <Col md="6" lg="3">
          <div className="s6__frame">
            <img
              src="https://media2.giphy.com/media/Ph6YGeB76j0QsPzU0G/giphy.gif?cid=ecf05e47xi0o5myz017f40icih9qpelrzik5ac01mob0czk9&rid=giphy.gif&ct=s"
              alt=""
            />
            <div className="s6__in-out-alert">
              <div className="s6__social-icons">

              </div>
  <h3></h3>
              <h3 class="inner_text">All in one!</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <style>{`
          .s6 {
              font-size: 16px;
              margin-top: 5em;
              background:#d3d3d7;
          }
          .s6__titles {
              margin-bottom: 4em;
              text-align: center;
          }

        .s6__titles h1 {
              font-size: 3em;
              margin-bottom: .8em;
              font-weight: 100;
              text-transform: capitalize;
              letter-spacing: 2px;
          }
            .s6__titles h4 {
                font-size: .9em;
                font-weight: 100;
                color: dimgray;
            }
            .s6__frame {
                position: relative;
                height: 255px;
                margin-bottom: 3em;
                overflow: hidden;
                box-shadow: #615d5da1 0px 3px 10px;
            }

            .s6__frame img {
                width: 100%;
            }
            .s6__frame:hover>.s6__in-out-alert {
                transform: translateY(0);
            }
            .s6__in-out-alert {
                position: absolute;
                display: flex;
                padding: 2em 0;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                width: 100%;
                left: 0;
                bottom: 0;
                background: #0e117c;
                transition: all .5s;
                transform: translateY(100%);
            }
            .s6__social-icons {
                font-size: .55em;
                color: #636567;
                margin-bottom: 2em;
            }
            .s6__social-icons > i:not(.fa-linkedin-in) {
                margin-right: 2em;
            }
            .s6__social-icons > i:hover {
                cursor: pointer;
                color: var(--brand-color);
            }



            .s6__in-out-alert > h3 {
                margin: 0;
                line-height: 1.3;
            }
            .s6__in-out-alert > h3:first-of-type {
                font-size: 1em;
                font-weight: 400;
                letter-spacing: 1.6px;
                color: #545252;
            }
            .s6__in-out-alert > h3:last-child {
              margin-left:5px;

                font-size: .95em;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
            .inner_text{
              font-size: .9em;
              font-weight: 100;
              color: white;
            }


        `}</style>
  </section>
)
