import React from 'react';
import './EmojisList';



function EmojiCard(props) {
  return (
    <div className='EmojiCard'>        
        <div className='term'>
            <dt>
                <span className='emoji' role='img' aria-label=''>{props.emoji} </span>
                <span>{props.name}</span>
            </dt>
            <dd>
                {props.meaning}
            </dd>
        </div>        
    </div>
  )
}

export default EmojiCard;