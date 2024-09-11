import logo from './logo.svg';
import './App.css';
import { useMemo, useReducer, useRef, useState } from 'react';


//use memo eka application eka speed karann bawitha karai(performane wadi karann)
const inputhandle =(inputValue)=>{
  let data;
  for(let i=0;i<1000000000;i++){
    data = i

  }
  console.log("inputHandle running")
  return inputValue
}
function App() {
    
  const [imageUrl,setImageUrl]=useState('')
  
 //  const inputValue=inputhandle(imageUrl)
  const imageData=useMemo(()=>inputhandle(imageUrl),[imageUrl])
     return (
    <div >
     <input type='text' placeholder='Enter image url' onChange={(e)=>setImageUrl(e.target.value)} />
     <input type='text' placeholder='Enter your name' />
     <input type='text' placeholder='Enter your city' />
     <input type='text' placeholder='Enter your position' />
     <button >Set Data</button>
    
     <div>
      <p>{imageUrl}</p>
      
    </div>
    </div>

   
  );
}

export default App;
