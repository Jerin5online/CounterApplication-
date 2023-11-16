import { createSlice } from "@reduxjs/toolkit";




const counterSlice = createSlice({
  name:'counterapp',
initialState:{
value:0
},
                            
//actions are created inside this reducers key as object
reducers:{
//logics to update state
                            
//function to increment number
increment:(state,action)=>{
//if its argument function then it can only be accessed by action and value in payload
state.value +=action.payload
},
//function to decrement number
                            
decrement:(state,action)=>{
//if its argument function then it can only be accessed by action and value in payload
                            
state.value -=action.payload
},
//function to reset
reset:(state)=>{
state.value = 0
}
}
})
                            
//action is required by component in order to update state
export const {increment,decrement,reset} = counterSlice.actions
                            
//reducer is required to storeto change the state value
 export default counterSlice.reducer
