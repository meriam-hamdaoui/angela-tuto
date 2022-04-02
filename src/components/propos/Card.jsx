import React from 'react';
import './Card.css';


function Card(props) {
  return (
    <div className='Card'>
        <div className='card-top'>
            <h2>{props.name}</h2>
            <img src={props.img} 
                alt="kristina" />
        </div>
        <div className='card-bottom'>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>        
    </div>
  )
}

export default Card;