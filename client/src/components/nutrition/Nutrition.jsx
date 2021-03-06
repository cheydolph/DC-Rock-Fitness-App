import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from "../dashboard/SideNav";
import VideoGrid from './VideoGrid';
import VideoFilter from './VideoFilter';
import videos from './data/vids';
import './styles/Nutrition.scss';
//import { Button } from 'reactstrap';

const Nutrition = (props) => { 
  const[input,setInput] = useState('');
    return (
      <Container fluid style={{padding: "0px"}}>
        <Row>
          <SideNav />
          <Col>
            <div>
              <body style={{}}>
                <h1 style={{ fontSize: '60px', fontFamily: 'Lekton', 'text-align':'center', 'margin-top': '3vw' }}> Nutrition</h1>
                <VideoFilter input={input} setInput={setInput}/>
                <VideoGrid filter={input} videos={videos}/>
              </body >
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

export default Nutrition;