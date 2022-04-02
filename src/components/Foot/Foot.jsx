import React from 'react';
import './Foot.css';

function Foot() {
    const currentYear = new Date().getFullYear();
  return (
    <p className='Foot'>
        Copyright &copy; {currentYear}
    </p>
  )
}

export default Foot;