import React, {useState,useEffect} from 'react'
import Stars from '../logos/stars.svg';
import box from '../logos/box.svg';
const Showcase2= () => {
    const [products, setProducts] = useState([])

    useEffect(() => {  

   fetchData()

 }, [])

 async function fetchData() {

    const resultat = await fetch("https://localhost:7243/api/Product")

    setProducts(await resultat.json())

  }
    
    
    return (
        <div className='grids'>

<h1 className='featured'>Featured Product</h1>

<div className='products '>

        
  

        {

        products.map(prod => (

            <div className='box'>

                <div className='image'> <img src={box} className="logo" alt="logo"/> </div>

                <div className='category'>{prod.category}</div>

                <div className='Title'>{prod.name} </div>

                <div className='stars'>
                <img src={Stars} className="logo" alt="logo"/>
                </div>

                <div className='price'>{prod.price}</div>

            </div>
          

            ))

        }  
 </div>
        </div> 
    )


      
  
  } 
  export default Showcase2