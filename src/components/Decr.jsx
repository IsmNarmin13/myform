import React from 'react'
import { useState } from 'react'
const Decr = () => {
    const [num, setNum]= useState(0);
    const func=()=>{
        setNum(num-1);
    }
    const func1=()=>{
        setNum(num+1);
    }
  return (
    <div className='main'>
        <p onClick={func} className='min'>-</p>
        <p className='number'>{num}</p>
        <p onClick={func1} className='min'>+</p>
    </div>
  )
}

export default Decr