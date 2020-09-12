import React from 'react';

function Buttons() {
    return(
        <div className='button-content'>
            <button id="love-btn" className="vote">
                <i id="thumbs-up" class="fas fa-thumbs-up"></i>LOVE IT
            </button>
            <button id="nope-btn" className="vote">
                <i id="thumbs-down" class="fas fa-thumbs-down"></i>NOPE IT
            </button>
        </div>
    )
}

export default Buttons;