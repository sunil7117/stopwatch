import { useEffect, useState } from 'react';
import './App.css'
function App() {
  const[timer,setTimer]=useState(0)
  const[hh,sethh]=useState(0)
  const[mm,setmm]=useState(0)
  const[ss,setss]=useState(0)
  const[start,setStart]=useState(false)
  const[starthh,setStarthh]=useState(false)
  const[stop,setStop]=useState(true)
  const[stophh,setStophh]=useState(true)
  const[reset,setReset]=useState(true)
  const[resethh,setResethh]=useState(true)
  const timerClick=(btn)=>{
    switch(btn){
      case 'startSec':{
        setStart(true)
        setStop(false)
        setReset(false)
        break
      }
      case 'starthh':{
        setStarthh(true)
        setStophh(false)
        setResethh(false)
        break
      }
      case 'stopSec':{
        setStart(false)
        setStop(true)
        setReset(false)
        break
      }
      case 'stophh':{
        setStarthh(false)
        setStophh(true)
        setResethh(false)
        break
      }
      case 'resetSec':{
        setTimer(0)
        setStart(false)
        setStop(true)
        setReset(true)
        break
      }
      case 'resethh':{
        sethh(0)
        setmm(0)
        setss(0)
        // setStart(false)
        // setStop(true)
        // setReset(true)
        setStarthh(false)
        setStophh(true)
        setResethh(true)
        break
      }
      default:{
      }
    }
    
  }
  
  useEffect(()=>{
    if(ss===59){
      setss(0)
      setmm(mm+1)
    }
    if(mm===59){
      setmm(0)
      sethh(hh+1)
    }
    if(start){
      const secInterval=setInterval(()=>setTimer((prev)=>prev+1),1000)
    return()=>clearInterval(secInterval)
    }
    if(starthh){
      const secInterval=setInterval(()=>setss((prev)=>prev+1),1000)
    return()=>clearInterval(secInterval)
  }
  },[start ,starthh,ss,mm,hh])
  
  return (
    <div className="App">
      <h1>Lets create a stopwatch</h1>
      <h3>Timer based on second.</h3>
      <h1>{timer}</h1>
      <button disabled={start} onClick={()=>timerClick('startSec')}>Start</button>
      <button disabled={stop} onClick={()=>timerClick('stopSec')}>Stop</button>
      <button disabled={reset} onClick={()=>timerClick('resetSec')}>Reset</button>





      <h3>Timer that show hours,Min and seconds....</h3>
      <h1>{hh}:{mm}:{ss}</h1>
      <button disabled={starthh} onClick={()=>timerClick('starthh')}>Start</button>
      <button disabled={stophh} onClick={()=>timerClick('stophh')}>Stop</button>
      <button disabled={resethh} onClick={()=>timerClick('resethh')}>Reset</button>
    </div>

  );
}

export default App;


