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
      <Container fluid style={{padding: "0px"}}>
        <Row>
          <SideNav />
          <Col>
            <div>
              <body style={{}}>
                <h1 style={{ fontSize: '60px', fontFamily: 'Lekton', 'text-align':'center', 'margin-top': '3vw' }}>
                  About Us</h1>
              </body >
              <br/>
              <div align='center'>
                <img src={profilePic} alt="" />
              </div>
              <div>
                <h1 style={{ fontFamily: 'Lekton', fontSize: '40px', 'text-align':'center', 'margin-top': '1vw', 'margin-bottom': '1vw' }}>First Name Last Name</h1>
                <p style={{ fontFamily: 'Lekton', fontSize: '20px', 'text-align':'center', 'margin-top': '1vw' }}> DC Fitness LLC is a private fitness training company. We offer our customers plenty of benefits to give them a leg up on the competition.</p>                <br />
                <p style={{ fontFamily: 'Lekton', fontSize: '20px', 'text-align':'center'}}> If you are interested in a private consulatation please request an appointment in the Calendar page.</p>
              </div>
              <br />
              <div>
                <p style={{ fontFamily: 'Lekton', 'text-align':'center' }}> Phone: 123-456-7890</p>
                <p style={{ fontFamily: 'Lekton', 'text-align':'center' }}> Email: dc_fit@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default About;
