import "../About.css";
import "../Home.css";

import React, { useEffect, useState, createContext, useContext } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const About = () => {
  const [state, setState] = useState({
    first: false,
    second: false,
    third: false,
  });
  // const [color] = useState(0)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const { first, second, third} = state;
  const handleChange = (event) => {

    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });

  };

  useEffect(() => {
    if (state.first && state.second) {
      changeColor('green');
    } else if(state.first){
      changeColor('red')
    } else if (state.second){
      changeColor('yellow'); 
    } else if(state.third){
      console.log("work")
    }else{
      changeColor('blue'); 
    }
  }, [state.first, state.second, state.third]); 

const Checkboxes = () =>  {
  return (
  <FormGroup id= "Checkbox" >
    <FormControlLabel className="abc" control={<Checkbox id="checkboxS" checked={first} onChange={handleChange} name= "first" />} label="I am from Singapore 🇸🇬" />
    <FormControlLabel className="abc" control={<Checkbox checked={second} onChange={handleChange} name="second" />} label="I am a student from Temasek Polytechnic 😀"/>
    <FormControlLabel className="abc" control={<Checkbox checked={third} onChange={handleChange} name= "third" />} label="I study Game Design and Development" />
    
  </FormGroup>
  );
}  

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <div class="navAnchor" id='AboutHeader' >
        <center id='AppHeaderfont'>About</center>
        <center><div><h2 class="about">All about me!</h2></div></center>
      </div>
  
      <div>
        <Checkboxes/>
      </div>

      <center><div id="colorSquare" class="square" ></div></center>


    </>
    
  );  
  function changeColor(color) {
    const square = document.getElementById('colorSquare');
    square.style.backgroundColor = color;
  }
};
export default About;

