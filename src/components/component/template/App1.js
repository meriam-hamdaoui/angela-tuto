import React from 'react';

function App1() {
    const user = 'Hamdoui Mariem';
    let currentYear = new Date().getFullYear();
    return (
        <div>
            <h4>this is created by {user}</h4>
            <h5>Copyright {currentYear}</h5>
        </div>        
    )
}

export default App1;