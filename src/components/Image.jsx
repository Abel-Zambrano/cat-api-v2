import React from 'react';

function Image(props) {
    return(
        <div className='image-content'>
            <img className='cat-image' src={props.img} alt="cat"/>
        </div>
)}

export default Image;