
import React from 'react'
import Stars from '../logos/stars.svg';
import box from '../logos/box.svg';
const Showcase5= () => {

    
    return (
    <div className='d-flex showcase5'>



<div>
<div> 
<div className="card-group">
    <div className='d-flex'>
  <div className="card">
  <img src={box} className="logo" alt="logo"/> 
    <div className="card-body">
      <p className="card-text">Category</p>
      <h5 className="card-title">Modern Black Blouse</h5>
      <img src={Stars} className="logo" alt="logo"/> 
      <p class="card-text">$49.00</p>
     
    </div>
   
  </div>
  <div class="card">
  <img src={box} className="logo" alt="logo"/> 
    <div class="card-body"> 
      <p class="card-text">Category</p>
      <h5 class="card-title">Modern Black Blouse</h5>
      <img src={Stars} className="logo" alt="logo"/> 
      <p class="card-text">$49.00</p>
     
    </div>
    </div>
    </div>
<div className='d-flex'>
    <div className="card">
  <img src={box} className="logo" alt="logo"/> 
    <div className="card-body">
      <p className="card-text">Category</p>
      <h5 className="card-title">Modern Black Blouse</h5>
      <img src={Stars} className="logo" alt="logo"/> 
      <p class="card-text">$49.00</p>
     
    </div>
   
  </div>
  <div class="card">
  <img src={box} className="logo" alt="logo"/> 
    <div class="card-body"> 
      <p class="card-text">Category</p>
      <h5 class="card-title">Modern Black Blouse</h5>
      <img src={Stars} className="logo" alt="logo"/> 
      <p class="card-text">$49.00</p>
     
    </div>
    </div>

</div>
    </div>
    </div>


</div>

<div className='boxen'>
    <h1>2 FOR USD $49</h1>
    <button className='btn-tertiary'>FALSE SALE</button>
</div>


    </div>


      )
  
  }
  export default Showcase5