
import React from 'react'
import support from '../logos/Support.svg';
import payment from '../logos/Payment.svg';
import delivery from '../logos/Delivery.svg';
const Showcase6= () => {

    
    return (
    <div className='d-flex showcase6'>



<div>
<div> 
<div className="card-group">
    <div className='d-flex'>
  <div className="card">
  <img src={support} className="logo" alt="logo"/> 
    <div className="card-body">
      <h5 className="card-title">Customer Support</h5>
      <p className="card-text">Village did removed enjoyed explain talking.</p>
     
    </div>
   
  </div>
  <div class="card">
  <img src={payment} className="logo" alt="logo"/> 
    <div class="card-body"> 
    <h5 className="card-title">Secured Payment</h5>
      <p className="card-text">Village did removed enjoyed explain talking.</p>
      
     
    </div>
    </div>
   

    <div className="card">
  <img src={delivery} className="logo" alt="logo"/> 
    <div className="card-body">
    <h5 className="card-title">Free Home Delivery</h5>
      <p className="card-text">Village did removed enjoyed explain talking.</p>
    
    </div>
    </div>

    <div className="card">
  <img src={delivery} className="logo" alt="logo"/> 
    <div className="card-body">
    <h5 className="card-title">30 Day Reuters</h5>
      <p className="card-text">Village did removed enjoyed explain talking.</p>
    
    </div>
    </div>

</div>
    </div>
    </div>

</div>

    </div>


      )
  
  }
  export default Showcase6