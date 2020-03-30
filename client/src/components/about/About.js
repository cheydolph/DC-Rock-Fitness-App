import React from 'react';
import profilePic from '../woman.jpg'
//import { Button } from 'reactstrap';
import NavigationBar from "../layout/Navbar";

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
 return(
<div>

<body style={{ marginLeft: '250px' }}>
  <NavigationBar />
  <h1 style={{  marginLeft: '5rem', fontSize: '60px', fontFamily: 'Lekton' }}> Contact</h1>

</body >








   <div style={{marginLeft: '250px', width: 500, height: 'auto', marginLeft: '250px'}}>
   <img src ={profilePic} alt=""/>
   </div>

   <div style = {{marginLeft: '20rem',}}>
      <h1 style = {{ fontFamily: 'Lekton', fontSize: '40px'}}>About Us</h1>

      <p style = {{ fontFamily: 'Lekton'}}> DC Fitness LLC is a private fitness training company. We offer our customers plenty of benefits to give them a leg up on the competition.</p>
      <p style = {{ fontFamily: 'Lekton'}}> If you are interested in a private consulatation please contact me below:</p>
   </div>


<br/>

   <div style = {{marginLeft: '20rem'}}>
   <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address:</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea className="form-control" rows="1" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
    </div>
    <button style={{backgroundColor: 'crimson'}} className="btn btn-primary">Send Message!</button>
    </form>
    </div>
  </div>
 );
}

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }

handleSubmit(event) {
}
}

export default About;
