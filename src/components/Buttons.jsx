import React from 'react';

function Buttons() {
    return(
        <div className='button-content'>
            <button id="love-btn" class="vote">
                <a href=""><i id="thumbs-up" class="fas fa-thumbs-up"></i>LOVE IT</a>
            </button>
            <button id="nope-btn" class="vote">
                <a href=""><i id="thumbs-down" class="fas fa-thumbs-down"></i>NOPE IT</a>
            </button>
        </div>
    )
}

export default Buttons;