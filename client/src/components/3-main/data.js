

setInterval(()=>{
    const item0 = document.querySelector("#time0"); 
let data = new Date();
let hours = data.getHours();
 let minutes= data.getMinutes();
 let seconds = data.getSeconds();
 let day_anighy = "AM" ;
 let z = "0";
// 

 if (hours > 12 ){
    day_anighy = "PM";
    hours = hours - 12;
 }


  item0.textContent = hours + ":" + minutes + ":"+ seconds + "" +  day_anighy;
 
  })