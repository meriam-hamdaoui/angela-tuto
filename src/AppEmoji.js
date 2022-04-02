import React from 'react';
import EmojiCard from './EmojiCard';
import EmojisList from './EmojisList'

function createEmojiCard(emojis){
    return <EmojiCard
                key={emojis.id} 
                emoji={emojis.emoji}
                name={emojis.name}
                meaning={emojis.meaning}/>
}

function AppEmoji() {
  return (
    <div className='AppEmoji'>
        <h1>Emoji Pedia</h1>
        <dl className='dictionary'>
            {EmojisList.map(createEmojiCard)}
        </dl>
    </div>
  )
}

export default AppEmoji;