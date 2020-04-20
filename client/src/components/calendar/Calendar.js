import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as dateFns from "date-fns";

import SideNav from "../dashboard/SideNav";
import calendarStyles from "./Calendar.css";
import axios from "axios"

import Popup from "reactjs-popup";


const Calendar = () => {
   const [currentMonth, setCurrentMonth] = useState(new Date());
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [email, setEmail] = useState('');
   const [phonenumber, setPhonenumber] = useState('');
   const [reason, setReason] = useState('');
   const [code, setCode] = useState('');
   const [timeslot, setTimeslot] = useState('');

   const today = new Date();

   const handleClick = (e) => {
      e.preventDefault();
      if (e.target.id === "firstname") {
         setFirstname(e.target.value);
      } else if (e.target.id === "lastname") {
         setLastname(e.target.value);
      } else if (e.target.id == "email") {
         setEmail(e.target.value);
      } else if (e.target.id == "phonenumber") {
         setPhonenumber(e.target.value);
      } else if (e.target.id == "reason") {
         setReason(e.target.value);
      } else {
         setCode(e.target.value);
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (firstname === "" || lastname === "" || email === "" || phonenumber === "" || reason === "" || code === "") { 
         alert("Please complete the full form.");
      }
      else if (timeslot === "") {
         alert("Please select an appointment time.");
      }
      else {
         const date = (dateFns.format(selectedDate, "MM")).concat("/", dateFns.format(selectedDate, "dd"), "/", dateFns.format(selectedDate, "yyyy"));
         const dataToSubmit = {
            firstname, lastname, email, phonenumber, reason, code, timeslot, date
         };
         axios
            .post('/users/calendar', dataToSubmit)
            .then((res) => console.log('Appointment Reserved', res.data))
            .catch(err => {
               console.error(err);
            });

         //this resets the input fields after submission
         setFirstname("");
         setLastname("");
         setEmail("");
         setPhonenumber("");
         setReason("");
         setCode("");
         setTimeslot("");
      }
   }

   const header = () => {
      const dateFormat = "MMMM yyyy";
      return (
         <div className="header row flex-middle">
            <div className="column col-start">
               <div className="icon" onClick={prevMonth}>
                  chevron_left
                </div>
            </div>
            <div className="column col-center">
               {dateFns.format(currentMonth, dateFormat)}
            </div>
            <div className="column col-end" onClick={nextMonth}>
               <div className="icon">
                  chevron_right
               </div>
            </div>
         </div>
      );
   };

   const days = () => {
      const days = [];
      days.push(<div className="column col-center">Sunday</div>);
      days.push(<div className ="column col-center">Monday</div>);
      days.push(<div className ="column col-center">Tuesday</div>);
      days.push(<div className ="column col-center">Wednesday</div>);
      days.push(<div className ="column col-center">Thursday</div>);
      days.push(<div className ="column col-center">Friday</div>);
      days.push(<div className ="column col-center">Saturday</div>);
      return <div className="days row">{days}</div>;
   };

   const cells = () => {
      const monthStart = dateFns.startOfMonth(currentMonth);
      const monthEnd = dateFns.endOfMonth(monthStart);
      const startDate = dateFns.startOfWeek(monthStart);
      const endDate = dateFns.endOfWeek(monthEnd);
      const dateFormat = "d";
      const rows = [];
      let days = [];
      let day = startDate;
      let formattedDate = "";
      while (day <= endDate) {
         for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(day, dateFormat);
            const cloneDay = day;
            days.push(
               <div
                  className={`column cell ${!dateFns.isSameMonth(day, monthStart) || dateFns.compareAsc(day, dateFns.subDays(today, 1)) === -1
                     ? "disabled" : dateFns.isSameDay(day, selectedDate)
                        ? "selected" : ""}`}
                  key={day}
                  onClick={() => onDateClick(cloneDay)}
               >
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate}</span>
               </div>
            );
            day = dateFns.addDays(day, 1);
         }
         rows.push(
            <div className="row" key={day}> {days} </div>
         );
         days = [];
      }
      return (<div className="body">{rows}</div>);
   };

   const nextMonth = () => {
      setCurrentMonth(dateFns.addMonths(currentMonth, 1));
   };

   const prevMonth = () => {
      setCurrentMonth(dateFns.subMonths(currentMonth, 1));
   };

   const onDateClick = day => {
      setSelectedDate(day);

      const date = (dateFns.format(selectedDate, "MM")).concat("/", dateFns.format(selectedDate, "dd"), "/", dateFns.format(selectedDate, "yyyy"));
      const dataToSubmit = {date};
      axios
      .get("/users/calendar", dataToSubmit)
      .then((res) => console.log('appointments', res.data))
      .catch(err => {
         console.error(err);
      });
   };

   const handleTimeClick = (e) => {
      e.preventDefault();
      if (e.target.id === "9") {
         setTimeslot("9:00am - 10:00am");
      } else if (e.target.id === "10") {
         setTimeslot("10:00am - 11:00am");
      } else if (e.target.id == "11") {
         setTimeslot("11:00am - 12:00pm");
      } else if (e.target.id == "12") {
         setTimeslot("12:00pm - 1:00pm");
      } else if (e.target.id == "1") {
         setTimeslot("1:00pm - 2:00pm");
      } else if (e.target.id == "2") {
         setTimeslot("2:00pm - 3:00pm");
      } else if (e.target.id == "3") {
         setTimeslot("3:00pm - 4:00pm");
      } else {
         setTimeslot("4:00pm - 5:00pm");
      }
   }

   const hoursList = () => {
      return <div>
         <div className = "entry"  id = "9" tabindex = "1" onClick = {handleTimeClick}><span className = "text" id = "9" onClick = {handleTimeClick}>{"9:00am - 10:00am"}</span></div>
         <div className = "entry"  id = "10" tabindex = "2" onClick = {handleTimeClick}><span className = "text" id = "10" onClick = {handleTimeClick}>{"10:00am - 11:00am"}</span></div>
         <div className = "entry"  id = "11" tabindex = "3"  onClick = {handleTimeClick}><span className = "text" id = "11" onClick = {handleTimeClick}>{"11:00am - 12:00pm"}</span></div>
         <div className = "entry" id = "12" tabindex = "4"  onClick = {handleTimeClick}><span className = "text" id = "12" onClick = {handleTimeClick}>{"12:00pm - 1:00pm"}</span></div>
         <div className = "entry" id = "1" tabindex = "5"  onClick = {handleTimeClick}style = {{background: "IndianRed"}}><span className = "text" id = "1" onClick = {handleTimeClick}>{"1:00pm - 2:00pm"}</span></div>
         <div className = "entry" id = "2" tabindex = "6"   onClick = {handleTimeClick}><span className = "text" id = "2" onClick = {handleTimeClick}>{"2:00pm - 3:00pm"}</span></div>
         <div className = "entry" id = "3" tabindex = "7"  onClick = {handleTimeClick}><span className = "text" id = "3" onClick = {handleTimeClick}>{"3:00pm - 4:00pm"}</span></div>
         <div className = "entry" id = "4" tabindex = "8" onClick = {handleTimeClick}><span className = "text" id = "4" onClick = {handleTimeClick}>{"4:00pm - 5:00pm"}</span></div>
      </div>;
   };

   const questionnaire = () => {
      return (
         <div className = "wrapper">
         <div style = {{marginTop: "20px"}}><font color = "white">Select an appointment time and complete the form below.</font></div>
         <div className = "input" style = {{float: "left", marginLeft: "50px"}}>
            <input type="text" placeholder="Firstname" id = "firstname" value = {firstname} onChange = {handleClick}/>
            <span class="underline-animation"></span>
         </div>
         <div className = "input" style = {{float: "right", marginRight: "50px"}}>
            <input type="text" placeholder="Lastname" id = "lastname" value = {lastname} onChange = {handleClick}/>
            <span class="underline-animation"></span>
         </div><br />
         <div className = "input" style = {{float: "left", marginLeft: "50px"}}>
            <input type="text" placeholder="Email" id = "email" value = {email} onChange = {handleClick}/>
            <span class="underline-animation"></span>
         </div>
         <div className = "input" style = {{float: "right", marginRight: "50px"}}>
            <input type="text" placeholder="Phone number" id = "phonenumber" value = {phonenumber} onChange = {handleClick}/>
            <span class="underline-animation"></span>
         </div><br />
         <div className = "input" style = {{float: "left", marginLeft: "50px"}}>
            <input type="text" placeholder="Reason for appointment" id = "reason" value = {reason} onChange = {handleClick}/>
            <span class="underline-animation"></span>
         </div>
         <div className = "input" style = {{float: "right", marginRight: "50px"}}>
            <input type="text" placeholder="Verification code" id = "code" value = {code} onChange = {handleClick}/>
            <span class="underline-animation"></span>
         </div><br />
         <div><Button style = {{marginTop: "40px"}} onClick = {handleSubmit}>Reserve Appointment</Button></div>
      </div>
      );
   }

   return (
      <div style = {{padding: "0px"}}>
         <Container fluid style = {{padding: "0px"}}>
            <Row style = {{margin: "0px", padding: "0px", width: "100%"}}>
              <Col style = {{padding: "0px", maxWidth: "400px"}}>
                  <SideNav />
              </Col>
              <Col>
                  <Row style = {{margin: "0px", padding: "0px"}}>
                     <Col style = {{padding: "0px"}}>
                     <div className = "calendar">
                        <div>{header()}</div>
                        <div>{days()}</div>
                        <div>{cells()}</div>
                     </div>
                     </Col>
                  </Row>
                  <Row style = {{margin: "0px", padding: "0px"}}>
                     <Col style = {{padding: "0px"}}>
                        <div className = "form">
                           <Row style = {{margin: "0px", padding: "0px"}}>
                              <div className = "header">
                                 Availability on <font color = "dodgerblue">{(dateFns.format(selectedDate, "MM")).concat("/", dateFns.format(selectedDate, "dd"), "/", dateFns.format(selectedDate, "yyyy"))}</font>
                              </div>
                           </Row>
                           <Row style = {{margin: "0px", padding: "0px"}}>
                              <Col style = {{margin: "0px", padding: "0px", maxWidth: "150px"}}>
                                 <div className = "hours" style = {{float: "left"}}>{hoursList()}</div>
                              </Col>
                              <Col style = {{padding: "0px", padding: "0px"}}>
                                 <div className = "background">
                                    <div class = "blur"></div>
                                 </div>
                                 <div>{questionnaire()}</div>
                              </Col>
                           </Row>
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Container>
      </div>
   );
};
export default Calendar;
