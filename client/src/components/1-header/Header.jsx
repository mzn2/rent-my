import { useEffect, useState } from 'react';
import  './header.css';

 const Header = () => {
  const [showmedal, setshowmodal]= useState(false);
  const [theme, setTheme]= useState(localStorage.getItem("currentMode") ?? "dark" );


  useEffect( ()=>{

    if( theme === "light"){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }

  } ,[theme])
  


  return (
    <header className=' flex'>
      <button  onClick={() => {
        setshowmodal(true)
      }
      }  className='menu icon-menu_open flex'>
        {" "}
      </button>
      <div/>
    
    <nav>

      <ul className='flex  '>
      <li><a href="#hero">المقال</a></li>
            <li><a href="#main">البيانات</a></li>
            <li><a href="#contact">التحدث</a></li>
            <li><a href="#fo">Uses</a></li>
      </ul>

    </nav>

    <button onClick={() => {

// Send value to LS

      localStorage.setItem("currentMode" , theme === "dark" ? "light"  : "dark")
      // get value from LS 

      setTheme(localStorage.getItem("currentMode"))
    }
    } className='mode flex'>
      {theme === "dark" ? (      <span className='icon-moon-o'></span>) :
      ( <span className='icon-sun'></span> )
      }
        
      </button>

    
    {showmedal && (
          <div className=" fixed ">
          <ul className="modal ">
            <li> 
              <button className='icon-close' onClick={() => {
               setshowmodal(false) 
              }
              }></button>
            </li>
            <li><a href="#hero">المقال</a></li>
            <li><a href="#main">البيانات</a></li>
            <li><a href="#contact">التحدث</a></li>
            <li><a href="#fo">Uses</a></li>
          </ul>
        </div>
    )}




    </header>
  )
}

export default Header;
