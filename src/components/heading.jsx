import React from 'react';

function Heading() {
    return(
        <header>
            <div className='logo'>
                <ul>
                <li><a href=""><i id="logo" class="fas fa-cat"></i>Cat API</a></li>
                </ul>
            </div>
            <div className='right-links'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Sign Up</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Heading;