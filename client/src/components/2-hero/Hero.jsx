import React, { useRef  } from "react";

import "./hero.css";
import Lottie from "lottie-react";
import animationHero from "../../animation/animationHero.json";
import { motion } from "framer-motion";
export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex  ">
      <div className="left-section ">
        <div className="parent-avater flex">
          <motion.img
          initial={{transform: "scale(0)"}}
          animate={{transform: "scale(1)"}}
          transition={{damping: 6, type: "spring" , stiffness: 100}}
          
          src="./meshari.jpg" className="avater" alt="" />
          <div className="icon-verified"> </div>
        </div> 
        <motion.h1
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
         
         className="title">

      مشاري|مبرمج موقع
        </motion.h1>
        <p className="sub-title">
        
        خريج دبلوم إدارة مكتبية بتقدير ممتاز مع مرتبة الشرف الأولى
    </p>
    <p className="sub-title">
      . 
      واطمح الحصول على فرصة عمل تمكنني من تطوير مهارا وخبراتي 
        
        
    </p>
        <div className="all-icons flex  icon">


          <div> <a  className="icon-telegram icon icon" href="https://t.me/+8XfSL08KewA0NTRK"></a> </div>
          <div> <a  className="icon-snapchat icon" href="https://www.snapchat.com/add/blti9?share_id=mOX1taS_RPGfKa2BNetvHg&locale=ar_SA@calendar=gregorian" />  </div>
          <div > <a className="icon-instagram icon" href="https://www.instagram.com/e50_9?igsh=b3NicDN0dWkwMWxo&utm_source=qr"></a></div>
          <div> <a  className="icon-x icon" href="https://x.com/gyfon_?s=21&t=nzgvZQE0-NEj38__eSi9nw"></a></div>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
     
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore 
            // https://lottiereact.com 

            lottieRef.current.setSpeed(0.8);
          }}
          animationData={animationHero}
        />
      </div>
    </section>
  );
}
