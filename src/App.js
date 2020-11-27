import React, {useState} from 'react'
import Message from './Message'
import './App.css'

function App (){
  let[count, setCount] = useState(1);
  let[isMorning, setMorning ] = useState(false)

  return(
    <div className={`inp ${isMorning ? 'dayL' : ''}`}>
      <h1>Day Time = {isMorning ? 'Day' : 'Night'}</h1>
      <Message counter={count} />

      <br/>
   <div className="btn">
      <button  onClick={()=>setCount(count+1)}>Update Counter </button> 
      <button  onClick={()=>setMorning(!isMorning)}>Update Day </button> 

    </div>
  </div> 
  )
}
export default App