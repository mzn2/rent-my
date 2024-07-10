import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'

function App() {

  useEffect(()=>{
window.addEventListener("scroll",() => {
  if(window.scrollY > 300){
    setshowScrollBTN(true)
  }else{
    setshowScrollBTN(false)
  };
    })
  },[]);

  const [showScrollBTN,setshowScrollBTN ] = useState(false)

  return (
    <div id='up' className='container'>
      <Header/>
      <div id="hero"></div>
      <Hero />
      <div id='main' className="divider" />
      <Main/>
      

      
      <div  id='contact' className="divider" />
      <Contact/>
      <div  id="fo" className="divider" />
      
      <Footer/>
      <div ></div>

    {showScrollBTN && (
       <a href="#up">
       <button className=" icon-keyboard_arrow_up scroll2Top"></button>
       </a>
    )}
   


    </div>
  )
}

export default App
