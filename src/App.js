import { useEffect, useState } from 'react';
import './App.css'
function App() {
  const[timer,setTimer]=useState(0)
  const[start,setStart]=useState(false)
  const[stop,setStop]=useState(true)
  const[reset,setReset]=useState(true)
  const timerClick=(btn)=>{
    switch(btn){
      case 'startSec':{
        setStart(true)
        setStop(false)
        setReset(false)
        break
      }
      case 'stopSec':{
        setStart(false)
        setStop(true)
        setReset(false)
        break
      }
      case 'resetSec':{
        setTimer(0)
        setStart(false)
        setStop(true)
        setReset(true)
        break
      }
      default:{
      }
    }
    
  }
  
  useEffect(()=>{
    if(start){
      const secInterval=setInterval(()=>setTimer((prev)=>prev+1),1000)
    return()=>clearInterval(secInterval)
    }
    
  },[start])
  
  return (
    <div className="App">
      <h1>Lets create a stopwatch</h1>
      <h3>Timer based on second.</h3>
      <h1>{timer}</h1>
      <button style={{marginRight:'10px'}} disabled={start} onClick={()=>timerClick('startSec')}>Start</button>
      <button style={{marginRight:'10px'}} disabled={stop} onClick={()=>timerClick('stopSec')}>Stop</button>
      <button disabled={reset} onClick={()=>timerClick('resetSec')}>Reset</button>
    </div>

  );
}

export default App;


