import React from 'react'

import'./video.css'
function video() {
const images = [];



for (let i = 0; i <= 129; i++) {
       images.push(
       <img 
              key={i} 
              src="https://placehold.co/420x270/png" 
              alt={`placeholder ${i}`} 
              style={{ margin: "10px" }}
       />
       );
}

return (<div className='div-1'>{images}</div>);
}

export default video