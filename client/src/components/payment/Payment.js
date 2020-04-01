import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SideNav from "../dashboard/SideNav";
import Image from 'react-bootstrap/Image'
import cashAppLogo from "../cash-app-png-1.png";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <SideNav />
          <Col>
            <div>
              <body>
                <h1>Payment</h1>
                <p1> We accept payment through the Cashapp. Click the logo below.</p1>
              </body >
              <div>
                <a href="https://cash.app/">
                  <Image src={cashAppLogo} responsive />
                </a>
                <h1> Cashtag: $DCFitness20</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Payment;
