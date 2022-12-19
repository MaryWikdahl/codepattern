import React from 'react'
import Logo from '../logos/loogo.svg';
import Search from '../logos/search.svg';
import Share from '../logos/share.svg';
import Like from '../logos/Like.svg';
import Cart from '../logos/Cart.svg';
import { useNavigate } from 'react-router-dom';

const Header= () => {
const navigate = useNavigate();
const redirect = (location = '') => navigate(`/${location}`)

    return (
    <div className='header d-flex'>
 <img src={Logo} className="logo" alt="logo"/> 
 <div className="paths">
 <p className="navigationLinks" onClick={() => redirect()}>Home</p>
 <p className="navigationLinks">Categories</p>
 <p className="navigationLinks">Products</p>
 <p className="navigationLinks" onClick={() => redirect('contact')}>Contacts</p></div>
 <div className="icon">
 <img src={Search}  alt="logo"/> 
 <img src={Share}  alt="logo"/> 
 <img src={Like}  alt="logo"/> 
 <img src={Cart} alt="logo"/> 
 </div>
    </div>
      )
  
  }
  export default Header