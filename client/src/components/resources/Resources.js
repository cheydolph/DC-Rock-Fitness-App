import React from 'react';
import NavigationBar from "../layout/Navbar";
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
 return(
   <div>
   <body style={{ marginLeft: '250px' }}>
     <NavigationBar />
     <h1 style={{ marginLeft: '5rem', fontSize: '60px', fontFamily: 'Lekton' }}> Resources</h1>
     <ResourceCard></ResourceCard>
   </body >







     </div>


 );
}
}

export default Resources;
