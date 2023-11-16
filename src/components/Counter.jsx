import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {

  //state to hold the value from input
  const[range,setRange] = useState("")

//hook to dispatch a fuction in action
const dispatch = useDispatch()
//compnenet can access the state by using useSelector hook

const count = useSelector((state)=>state.counter.value)

console.log(range);
  return (
    <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
              <div className='bg-light p-5 rounded' style={{width:"500px",textAlign:"center",fontFamily:"serif"}}><h1>Counter Application</h1>
              <div className='d-flex justify-content-center align-items-center w-100 flex-column rounded bg-info p-4'>
                <h1>{count}</h1>
              </div>
               <div>
                <button onClick={()=>dispatch(increment(Number(range)))} className='btn bg-success text-white rounded p-2 mt-3 ms-3 '>Increment</button>
                <button onClick={()=>dispatch(decrement(Number(range)))} className='btn bg-danger text-white rounded p-2 mt-3 ms-5'>Decrement</button>
                <button onClick={()=>dispatch(reset())} className='btn bg-info text-white rounded p-2 mt-3 ms-5 ' style={{width:"90px"}}>Reset</button>
                <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control mt-3' style={{borderColor:"blue"}} placeholder='Enter the Range' />

          
          
               </div>
              </div>

              </div>

  )
}

export default Counter
