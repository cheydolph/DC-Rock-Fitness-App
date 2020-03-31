import React from 'react';
import profilePic from '../woman.jpg'
//import { Button } from 'reactstrap';
import SideNav from "../dashboard/SideNav";
import { Container, Row, Col } from 'react-bootstrap';

class About extends React.Component {
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
          <Col xs={2} style={{ backgroundColor: "black", maxWidth: "250px" }}>
            <Row style={{ height: "100vh" }}>
              <SideNav />
            </Row>
          </Col>
          <Col>
            <div>

              <body style={{ marginLeft: '250px' }}>
                <h1 style={{ marginLeft: '5rem', fontSize: '60px', fontFamily: 'Lekton' }}> About Us</h1>
              </body >
              <div style={{ marginLeft: '250px', width: 500, height: 'auto', marginLeft: '250px' }}>
                <img src={profilePic} alt="" />
              </div>
              <div style={{ marginLeft: '20rem', }}>
                <h1 style={{ fontFamily: 'Lekton', fontSize: '40px' }}>First Name Last Name</h1>
                <p style={{ fontFamily: 'Lekton' }}> DC Fitness LLC is a private fitness training company. We offer our customers plenty of benefits to give them a leg up on the competition.</p>                <br />
                <p style={{ fontFamily: 'Lekton' }}> If you are interested in a private consulatation please request an appointment in the Calendar page.</p>
              </div>
              <br />
              <div style={{ marginLeft: '20rem', }}>
                <p style={{ fontFamily: 'Lekton' }}> Phone: 123-456-7890</p>
                <p style={{ fontFamily: 'Lekton' }}> Email: dc_fit@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default About;
