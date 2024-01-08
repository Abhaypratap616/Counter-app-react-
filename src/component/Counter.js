import React, { useState } from 'react'
import './counter.css'
export default function Counter() {
    const [count ,setcount]=useState(0);
    function incrementvalue(){
        setcount(count+1);
    }
    function decrementvalue(){
        setcount(count-1);
    }
    function resetvalue(){
        setcount(0);
    }
  return (
    <div className='center'>
      <h2>Increment&decrement</h2>
      <button className='btn-1' onClick={incrementvalue}>+</button>
      <span className=''>{count}</span>
      <button className='btn-1' onClick={decrementvalue}>-</button>
      <div>
      <button className='btn-2' onClick={resetvalue}>Reset</button>
      </div>
    </div>
  )
}
