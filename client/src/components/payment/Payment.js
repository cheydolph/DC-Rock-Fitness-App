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
      <Container fluid style={{padding: "0px"}}>
        <Row>
          <Col xs={2} style={{ backgroundColor: "black", maxWidth: "250px" }}>
            <Row style={{ height: "100vh" }}>
              <SideNav />
            </Row>
          </Col>
          <Col>
            <div>
              <body>
                <h1 style={{ fontSize: '60px', fontFamily: 'Lekton' }}>Payment</h1>
                <p style = {{fontFamily: 'Lekton', fontSize: '40px' }}> We accept payment through the Cashapp. Click the logo below.</p>
              </body >
              <div>
                <a href="https://cash.app/">
                  <Image src={cashAppLogo} responsive />
                </a>
                <h1 style={{ fontSize: '60px', fontFamily: 'Lekton' }}> Cashtag: $DCFitness20</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Payment;
