import { createAction, props } from "@ngrx/store";
import { Action } from "@ngrx/store";

export const increment = createAction(
  '[Counter] Increment',
  props<{value : number;}>()
);


export const decrement = createAction(
  '[Counter] Decrement',
  props<{value : number;}>()
);

// Action also provides data


// export class IncrementAction implements Action {
//   readonly type : string = '';
//   constructor(public value : number){

//   }
// }

// export type CounterActions = IncrementAction;
