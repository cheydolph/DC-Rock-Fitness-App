import React, {Component, useState} from 'react';

const WorkoutCard = (props) => {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const toggleToggle1 = () =>{
        if(toggle1) setToggle1(false);
        else setToggle1(true);
    }
    const toggleToggle2 = () =>{
        if(toggle2) setToggle2(false);
        else setToggle2(true);
    }
    const toggleToggle3 = () =>{
        if(toggle3) setToggle3(false);
        else setToggle3(true);
    }
    return (
        <div 
            style={{
                width: "100vh",
                minHeight: "300px",
                backgroundColor: "#e6e6e6",
                borderRadius: "10px",
                borderColor:"grey",
                borderStyle: "inset",
                paddingBottom:"20px"
                }} 
                className="container left-align">
            
            <div class="container">
                <h3 className='center-align'>Legs and Shoulders</h3>
                <p>Today we are going to work on legs and shoulders. Make sure you have good form!</p>
                <div style={{padding: "0", borderWidth: "2px", borderColor:"black", borderStyle:"inset"}}>
                        <button type="button" class="collapsible" onClick={toggleToggle1}
                            style={{backgroundColor: "#eee",
                            color: "#444",
                            cursor: "pointer",
                            padding: "18px",
                            width: "100%",
                            border: "none",
                            textAlign: "left",
                            outline: "none",
                            fontSize: "20px",
                            boxSizing: "border-box",
                            marginBottom:"0px",
                            marginTop:"0"
                        }}
                        >Reverse Pec Deck Fly (3 sets of 15)</button>
                    {toggle1 === true && 
                    <div style={{
                        padding: "0 18px",
                        overflow: "hidden",
                        backgroundColor: "#f1f1f1"
                    }}>
                        <iframe width="100%" height="300px"
                            src="https://www.youtube.com/embed/MOBQn99Z1T4">
                        </iframe>
                    <p>This is the tutorial for Reverse Pec Deck Fly. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>}
                </div>
                <div style={{margin: "0", padding: "0", borderWidth: "2px", borderColor:"black", borderStyle:"inset"}}>
                        <button type="button" class="collapsible" onClick={toggleToggle2}
                            style={{backgroundColor: "#eee",
                            color: "#444",
                            cursor: "pointer",
                            padding: "18px",
                            width: "100%",
                            border: "none",
                            textAlign: "left",
                            outline: "none",
                            fontSize: "20px",
                            boxSizing: "border-box",
                            marginBottom:"0px",
                            marginTop:"0"
                        }}
                        >Bench Pistol Squats (3 sets of 10)</button>
                    {toggle2 === true && 
                    <div style={{
                        padding: "0 18px",
                        overflow: "hidden",
                        backgroundColor: "#f1f1f1"
                    }}>
                        <iframe width="100%" height="300px"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    <p>This is the tutorial for Bench Pistol Squats. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>}
                </div>
                <div style={{margin: "0", padding: "0", borderWidth: "2px", borderColor:"black", borderStyle:"inset"}}>
                        <button type="button" class="collapsible" onClick={toggleToggle3}
                            style={{backgroundColor: "#eee",
                            color: "#444",
                            cursor: "pointer",
                            padding: "18px",
                            width: "100%",
                            border: "none",
                            textAlign: "left",
                            outline: "none",
                            fontSize: "20px",
                            boxSizing: "border-box",
                            marginBottom:"0px",
                            marginTop:"0"
                        }}
                        >Single-Arm Kettlebell Press (3 sets of 12)</button>
                    {toggle3 === true && 
                    <div style={{
                        padding: "0 18px",
                        overflow: "hidden",
                        backgroundColor: "#f1f1f1"
                    }}>
                        <iframe width="100%" height="300px" title="workout3"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ">
                        </iframe>
                    <p>This is the tutorial for Single-Arm Kettlebell Press. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>}
                </div>
            
            </div>
            
        </div>
    );
    
}

export default WorkoutCard;