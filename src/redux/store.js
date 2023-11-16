import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({
                            //reducer can only update value of state in store
                            //reducer key is pre-define (its an objct which can hold more than one reducer)
                            
                reducer:{
                            //reducer is coming from the counterSlice since we are export reducer as export as export default
                counter:counterSlice
                }
}
)