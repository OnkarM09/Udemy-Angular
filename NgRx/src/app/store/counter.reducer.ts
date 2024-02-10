import { Action, createReducer, on } from "@ngrx/store";
// import { CounterActions, IncrementAction } from "./counter.actions";
import { decrement, increment } from "./counter.actions";

const initialState = 0 ;   //coulde be object/boolean/number/array anything

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action)=> state + action.value),
    on(decrement, (state, action)=> state - action.value)
  );






// createReducer Under the hood function
// export function counterReducer(state = initialState, action : CounterActions | Action){
//   if(action.type == '[Counter] Increment'){
//     return state + (action as IncrementAction).value;
//   }
//   return state;   // return new state (Current state)

// }
