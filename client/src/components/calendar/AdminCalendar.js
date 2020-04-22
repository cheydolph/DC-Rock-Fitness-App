import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as dateFns from "date-fns";
import moment from 'moment';

import SideNav from "../dashboard/SideNav";
import calendarStyles from "./Calendar.css";
import axios from "axios";

import Popup from "reactjs-popup";


const AdminCalendar = () => {
   const [currentMonth, setCurrentMonth] = useState(new Date());
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [email, setEmail] = useState('');
   const [phonenumber, setPhonenumber] = useState('');
   const [reason, setReason] = useState('');
   const [code, setCode] = useState('');
   const [timeslot, setTimeslot] = useState('');

   const [reserved9, setReserved9] = useState('false');
   const [reserved10, setReserved10] = useState('false');
   const [reserved11, setReserved11] = useState('false');
   const [reserved12, setReserved12] = useState('false');
   const [reserved1, setReserved1] = useState('false');
   const [reserved2, setReserved2] = useState('false');
   const [reserved3, setReserved3] = useState('false');
   const [reserved4, setReserved4] = useState('false');

   const today = new Date();

   const handleClick = (e) => {
      e.preventDefault();
      if (e.target.id === "firstname") {
         setFirstname(e.target.value);
      } else if (e.target.id === "lastname") {
         setLastname(e.target.value);
      } else if (e.target.id === "email") {
         setEmail(e.target.value);
      } else if (e.target.id === "phonenumber") {
         setPhonenumber(e.target.value);
      } else if (e.target.id === "reason") {
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
         //const date = (dateFns.format(selectedDate, "MM")).concat("-", dateFns.format(selectedDate, "dd"), "-", dateFns.format(selectedDate, "yyyy"));
         const date = moment(selectedDate).format('MM-DD-YYYY');
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
                  className={`column cell ${!dateFns.isSameMonth(day, monthStart) 
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

   const displayAppointments = (data) => {
      let hour;
      for (hour of data) {
          if (hour.time === "9:00am - 10:00am") {
              setReserved9(true); console.log("Hi");
          } else if (hour.time === "10:00am - 11:00am") {
               setReserved10(true);
          } else if (hour.time === "11:00am - 12:00pm") {
               setReserved11(true);
          } else if (hour.time === "12:00pm - 1:00pm") {
               setReserved12(true);
          } else if (hour.time === "1:00pm - 2:00pm") {
               setReserved1(true);
          } else if (hour.time === "2:00pm - 3:00pm") {
               setReserved2(true);
          } else if (hour.time === "3:00pm - 4:00pm") {
               setReserved3(true);
          } else if (hour.time === "4:00pm - 5:00pm") {
               setReserved4(true);
          }
      }
  }

   const onDateClick = day => {
      setSelectedDate(day);

      setReserved9(false);
      setReserved10(false);
      setReserved11(false);
      setReserved12(false);
      setReserved1(false);
      setReserved2(false);
      setReserved3(false);
      setReserved4(false);

      const dateStr = moment(day).format('MM-DD-YYYY');
      //const date = (dateFns.format(selectedDate, "MM")).concat("/", dateFns.format(selectedDate, "dd"), "/", dateFns.format(selectedDate, "yyyy"));
      //const dataToSubmit = {date};
      fetch("/users/calendar/:" + dateStr, {method: 'GET'})      
      .then(res => res.json())
      .then(data => displayAppointments(data))
      .catch(err => {
         console.error(err);
      });
   };


   const setInfo = (hour) => {
    setFirstname(hour.firstname);
    setLastname(hour.lastname);
    setEmail(hour.email);
    setPhonenumber(hour.phonenumber);
    setReason(hour.reason);
    setCode(hour.code);
   }

   const handleTimeClick = (e) => {
      e.preventDefault();
      if (e.target.id === "9") {
         setTimeslot("9:00am - 10:00am");
      } else if (e.target.id === "10") {
         setTimeslot("10:00am - 11:00am");
      } else if (e.target.id === "11") {
         setTimeslot("11:00am - 12:00pm");
      } else if (e.target.id === "12") {
         setTimeslot("12:00pm - 1:00pm");
      } else if (e.target.id === "1") {
         setTimeslot("1:00pm - 2:00pm");
      } else if (e.target.id === "2") {
         setTimeslot("2:00pm - 3:00pm");
      } else if (e.target.id === "3") {
         setTimeslot("3:00pm - 4:00pm");
      } else {
         setTimeslot("4:00pm - 5:00pm");
      }

      const dateStr = moment(selectedDate).format('MM-DD-YYYY');
      if (timeslot === "9:00am - 10:00am" && reserved9 === true) {
          console.log("hi");
        fetch("/users/calendar/" + timeslot + "/" + dateStr, {method: 'GET'})      
        .then(res => res.json())
        .then(data => setInfo(data))
        .catch(err => {
         console.error(err);
     });
    } else if (timeslot === "10:00am - 11:00am") {
         setReserved10(true);
    } else if (timeslot === "11:00am - 12:00pm") {
         setReserved11(true);
    } else if (timeslot === "12:00pm - 1:00pm") {
         setReserved12(true);
    } else if (timeslot === "1:00pm - 2:00pm") {
         setReserved1(true);
    } else if (timeslot === "2:00pm - 3:00pm") {
         setReserved2(true);
    } else if (timeslot === "3:00pm - 4:00pm") {
         setReserved3(true);
    } else if (timeslot === "4:00pm - 5:00pm") {
         setReserved4(true);
    }
   }

   const hoursList = () => {
      return <div>
         <div className = {`entry ${reserved9===true ? "reserved" : ""}`} id = "9" tabindex = "1" onClick = {handleTimeClick}><span className = "text" id = "9" onClick = {handleTimeClick}>{"9:00am - 10:00am"}</span></div>
         <div className = {`entry ${reserved10===true ? "reserved" : ""}`}  id = "10" tabindex = "2" onClick = {handleTimeClick}><span className = "text" id = "10" onClick = {handleTimeClick}>{"10:00am - 11:00am"}</span></div>
         <div className = {`entry ${reserved11===true ? "reserved" : ""}`}  id = "11" tabindex = "3"  onClick = {handleTimeClick}><span className = "text" id = "11" onClick = {handleTimeClick}>{"11:00am - 12:00pm"}</span></div>
         <div className = {`entry ${reserved12===true ? "reserved" : ""}`} id = "12" tabindex = "4"  onClick = {handleTimeClick}><span className = "text" id = "12" onClick = {handleTimeClick}>{"12:00pm - 1:00pm"}</span></div>
         <div className = {`entry ${reserved1===true ? "reserved" : ""}`} id = "1" tabindex = "5"  onClick = {handleTimeClick}><span className = "text" id = "1" onClick = {handleTimeClick}>{"1:00pm - 2:00pm"}</span></div>
         <div className = {`entry ${reserved2===true ? "reserved" : ""}`} id = "2" tabindex = "6"   onClick = {handleTimeClick}><span className = "text" id = "2" onClick = {handleTimeClick}>{"2:00pm - 3:00pm"}</span></div>
         <div className = {`entry ${reserved3===true ? "reserved" : ""}`} id = "3" tabindex = "7"  onClick = {handleTimeClick}><span className = "text" id = "3" onClick = {handleTimeClick}>{"3:00pm - 4:00pm"}</span></div>
         <div className = {`entry ${reserved4===true ? "reserved" : ""}`} id = "4" tabindex = "8" onClick = {handleTimeClick}><span className = "text" id = "4" onClick = {handleTimeClick}>{"4:00pm - 5:00pm"}</span></div>
      </div>;
   };

   const questionnaire = () => {
    return (
        <div className = "wrapper">
        <div style = {{marginTop: "20px"}}><font color = "white">Appointment Info.</font></div>
        <div style = {{float: "left", marginLeft: "50px"}}>
           {firstname}
           <span class="underline-animation"></span>
        </div>
        <div style = {{float: "right", marginLeft: "50px"}}>
           {lastname}
           <span class="underline-animation"></span>
        </div><br />
        <div style = {{float: "left", marginLeft: "50px"}}>
           {email}
           <span class="underline-animation"></span>
        </div>
        <div style = {{float: "right", marginLeft: "50px"}}>
           {phonenumber}
           <span class="underline-animation"></span>
        </div><br />
        <div style = {{float: "left", marginLeft: "50px"}}>
           {reason}
           <span class="underline-animation"></span>
        </div>
        <div style = {{float: "right", marginLeft: "50px"}}>
           {code}
           <span class="underline-animation"></span>
        </div><br />
     </div>
     );
   }

   return (
      <div style = {{padding: "0px"}}>
         <Container fluid style = {{padding: "0px"}}>
            <Row>              
                <SideNav />              
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
export default AdminCalendar;
