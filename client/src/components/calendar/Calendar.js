import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as dateFns from "date-fns";

import SideNav from "../dashboard/SideNav";
import calendarStyles from "./Calendar.css";
import axios from "axios"

import Popup from "reactjs-popup";

const Calendar = () => {
   const [currentMonth, setCurrentMonth] = useState(new Date());
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('');

   const handleClick = (e) => {
      e.preventDefault();
      if (e.target.id === "name") {
         setName(e.target.value)
      } else if (e.target.id === "email") {
         setEmail(e.target.value)
      }
      else {

         setMessage(e.target.value);
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (name === "" || email === "" || message === "") { //requires the name,email, and description is required
         alert("Name, Email, and Description are requried")
      }
      else {
         const dataToSubmit = {
            name,
            email,
            message:
               `Appointment with ${name} on ${(dateFns.format(selectedDate, "MM")).concat("/", dateFns.format(selectedDate, "dd"), "/", dateFns.format(selectedDate, "yyyy"))}.
Appointment description: ${message}
     `,
         }


         axios
            .post('/users/calendar', dataToSubmit)
            .then((res) => console.log('data Sent', res.data))
            .catch(err => {
               console.error(err);
            });

         //this resets the input fields after submission
         setName("");
         setEmail("");
         setMessage("");


      }
   }

   const form = () => {
      return (
         <div >
            <form onSubmit={handleSubmit}>
               <input id="name" placeholder="Name" value={name} onChange={handleClick} className="inputText" /><br />
               <input id ="date" placeholder="Date" value = {(dateFns.format(selectedDate, "MM")).concat("/", dateFns.format(selectedDate, "dd"), "/", dateFns.format(selectedDate, "yyyy"))} className="inputText"/><br />
               <input id="email" placeholder="Email" value={email} onChange={handleClick} className="inputText" /><br />
               <input id="message" placeholder="Appointment Description" value={message} className="inputMes" onChange={handleClick} /><br />
               <Popup trigger = {<button>Confirm Appointment</button>}>
                  Appointment confirmed! Your appointment is on {(dateFns.format(selectedDate, "MM")).concat("/", dateFns.format(selectedDate, "dd"), "/", dateFns.format(selectedDate, "yyyy"))}.
               </Popup>
            </form>


         </div>
      );
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
      return <div className="body">{rows}</div>;
   };

   const nextMonth = () => {
      setCurrentMonth(dateFns.addMonths(currentMonth, 1));
   };

   const prevMonth = () => {
      setCurrentMonth(dateFns.subMonths(currentMonth, 1));
   };

   const onDateClick = day => {
      setSelectedDate(day);

      //console.log(day, "this is the new day")
   };

   return (
      <Container fluid>
         <Row>
            <Col xs={2} style={{ backgroundColor: "black", maxWidth: "250px" }}>
               <Row style={{ height: "100vh" }}>
                  <SideNav />
               </Row>
            </Col>
            <Col>
               <div className="calendar">
                  <div>{header()}</div>
                  <div>{days()}</div>
                  <div>{cells()}</div>
                  <div> {form()}</div>
               </div>
            </Col>
         </Row>
      </Container>
   );
};
export default Calendar;
