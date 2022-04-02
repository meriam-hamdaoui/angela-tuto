import React from 'react';
import './Styling.css'

export default function Styling() {
    const style = {
        color : 'red'
    }
  return (
    <div className='Styling'>
      <h1 className='h1s'>Hamdaoui Mariem</h1>  
      <h4 style={{color : 'green'}}>Full Stack JS student</h4> 
      <p style={style}>I'm a network engineer learning the web development</p>
    </div>
  )
}

