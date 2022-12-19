
import React, {useState,useEffect} from 'react'
import Stars from '../logos/stars.svg';
import box from '../logos/box.svg';
const Showcase4= () => {

    
    const [products, setProducts] = useState([])
    useEffect(() => {  
      async function fetchData() {
        const resultat = await fetch("https://localhost:7243/api/Product")
        setProducts(await resultat.json())
    
      }
      fetchData()
    }, [])
    
    return (
    <div className='d-flex'>
<div className='boxen'>
    <h1>2 FOR USD $29</h1>
    <button className='btn-tertiary'>FALSE SALE</button>
</div>


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
      <p class="card-text">$35.00</p>
     
    </div>
   
  </div>
  <div class="card">
  <img src={box} className="logo" alt="logo"/> 
    <div class="card-body"> 
      <p class="card-text">Category</p>
      <h5 class="card-title">Modern Black Blouse</h5>
      <img src={Stars} className="logo" alt="logo"/> 
      <p class="card-text">$35.00</p>
     
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
      <p class="card-text">$35.00</p>
     
    </div>
   
  </div>
  <div class="card">
  <img src={box} className="logo" alt="logo"/> 
    <div class="card-body"> 
      <p class="card-text">Category</p>
      <h5 class="card-title">Modern Black Blouse</h5>
      <img src={Stars} className="logo" alt="logo"/> 
      <p class="card-text">$35.00</p>
     
    </div>
    </div>

</div>
    </div>
    </div>


</div>




    </div>


      )
  
  }
  export default Showcase4