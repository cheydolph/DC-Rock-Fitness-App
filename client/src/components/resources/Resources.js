import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from "../dashboard/SideNav";
import Image from 'react-bootstrap/Image'
//import { Button } from 'reactstrap';
import ResourceCard from "./resourceCard";

class Resources extends React.Component {
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
              <body style={{}}>
                <h1 style={{ fontSize: '60px', fontFamily: 'Lekton' }}> Resources</h1>
                <ResourceCard></ResourceCard>
              </body >
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Resources;
