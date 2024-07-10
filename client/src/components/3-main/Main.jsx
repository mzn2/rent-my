

import { useState } from "react";
import "./main.css";
import "./data.js";
import { myproject, myproject2 } from "./myproject";
import { AnimatePresence, motion } from "framer-motion";


function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myproject);

  const [arr2, setArr2] = useState(myproject2);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);




    setcurrentActive(buttonCategory);

    const newArr = myproject.filter((item) => {
      const zz = item.category.find((myitem) => {
        return myitem === buttonCategory;
      });
      return zz === buttonCategory;
    });

    // project js => ./myproject => myproject2
    const newArr2 = myproject2.filter((item) => {
      const zz = item.category.find((myitem) => {
        return myitem === buttonCategory;
      });
      
      return zz === buttonCategory;
    });
    setArr(newArr);
    setArr2(newArr2);
  };


 
  return (
    <main className="flex">
      <section className="left-section   flex ">

        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myproject);
            setArr2(myproject2)
          }}
          className={currentActive === "all" ? "active" : null}
        >
         جميع البيانات
        </button>

        <button
          onClick={() => {
            handleClick("my");
          }}
          className={currentActive === "my" ? "active" : null}
        >
          رؤيه 2030
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          js  مشاريع
        </button>
        <button
          onClick={() => {
            handleClick("to");
          }}
          className={currentActive === "to" ? "active" : null}
        >
          المهارات
        </button>
      </section>

      <section className="right-section   flex">
        <AnimatePresence>
        
        
        
        {arr.map((item) => {
          return (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{type: "spring" , damping: 4, }}
              key={item.h1}
              className="card "
            >

            <h1 className="h1" >
              {item.h1}
            </h1>
              <div style={{ width: "266px" }} className="box">

              <h1 className="title"> {item.h2} </h1>
              <h1 className="title"> {item.h7} </h1>   
                <p className="sub-title">{item.p}</p>
                <h1 className="title"> {item.h3} </h1>
               
                <h1 className="title"> {item.h4} </h1>
                <h1 className="title"> {item.h5} </h1>
                <p> {item.p2} </p>
            
              </div>
            </motion.article>
          );
        })}




        {arr2.map((item) => {
          return (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{type: "spring" , damping: 4, }}
              key={item.h1}
            
              className="card " >
             

              <div  className=" body2">
               
               <div className="wrapper">
                <div className="display">
                  <div id="time0"> </div>
                </div>
                <span></span>
                <span></span>
               </div>
               
              
                
                
                
        
        <h1>.جاري العمل على باقي المشاريع!</h1>

        
              </div>
            </motion.article>  
          );
        })}
        
        
        </AnimatePresence>
       
      </section>
    </main>
  );
}
export default Main;
