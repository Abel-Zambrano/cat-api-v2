import React from 'react';


function Buttons() {
    return(
        <div className='button-content'>
            <button id="love-btn" className="vote">
                <a href="/">
                    <i id="thumbs-up" class="fas fa-thumbs-up"></i>LOVE IT
                </a>
            </button>
            <button id="nope-btn" className="vote">
                <a href="/">
                    <i id="thumbs-down" class="fas fa-thumbs-down"></i>NOPE IT
                </a>
            </button>
        </div>
    )
}

export default Buttons;