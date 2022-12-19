// import logo from './logo.svg';
import './App.css';
import './Style.css';
import {Routes, Route} from 'react-router-dom';
import Contact from './views/ContactView.js';
import Home from './views/HomeView.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


function App() {

 
  return (
   <div> 
   {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <Header/>
        <Routes>   
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact/>} />
         
        </Routes>
        <Footer/>
    </div> 
    
  );
}

export default App;
