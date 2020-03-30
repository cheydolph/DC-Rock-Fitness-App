import React from 'react';
import cashAppLogo from '../cash-app-png-1.png'
import NavigationBar from "../layout/Navbar";
import Image from 'react-bootstrap/Image'
//import { Button } from 'reactstrap';

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
 return(
   <div>
   <body style={{ marginLeft: '250px' }}>
     <NavigationBar />
     <h1 style={{ marginLeft : '5rem', fontSize: '60px', fontFamily: 'Lekton' }}>Payment</h1>
     <p1 style={{ marginLeft : '5rem', fontSize: '40px', fontFamily: 'Lekton' }}> We accept payment through the Cashapp. Click the logo below.</p1>
   </body >


      <div style={{width: 500, height: 'auto', marginLeft: '250px'}}>
      <a href="https://cash.app/">
       <Image src={cashAppLogo} responsive/>
      </a>
         <h1 style={{ marginLeft: '20rem', fontSize: '60px', fontFamily: 'Lekton' }}> Cashtag: $DCFitness20</h1>
      </div>

     </div>


 );
}
}

export default Payment;
