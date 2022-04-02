import React from 'react';
import './Greeting.css'

function Greeting () {
   const hour = new Date().getHours();
   
    console.log(hour);
   let greet;

   const customStyle = {
       color : ''
   }

   if (hour < 12){
    greet = 'Morning';
    customStyle.color = 'red';
   }else if (hour < 18){
       greet = 'Afternoon';
       customStyle.color = 'green';
   } else {
       greet = 'Night';
       customStyle.color = 'blue';
   }
   
    return (
        <h1 className='heading'>Good <span style={customStyle}>{greet}</span></h1>
    )  
}

export default Greeting;