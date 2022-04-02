import React from 'react';
import './Note.css';

function Note(props) {
  return (
    <div className='Note'>
      <h1 className='noteh'>{props.title}</h1>
      <p className='notep'>{props.content}</p>
    </div>
  )
}

export default Note;
