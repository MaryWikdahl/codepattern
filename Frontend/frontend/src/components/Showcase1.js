import React from 'react'
import Woman from '../logos/Woman.svg';
import Man from '../logos/Man.svg';
const Showcase1= () => {

    
    return (
    <div className='d-flex'>
 <img src={Woman} className="logo" alt="logo"/> 
 <div className="sale">
 <h1>Sale Up
To 50% Off </h1>
 <p> Online shopping free home delivery over $100</p>
<button className="btn-primary" > SHOP NOW</button>

</div>
<img src={Man} className="logo" alt="logo"/> 
    </div>
      )
  
  }
  export default Showcase1