import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [JsonPipe, AsyncPipe]
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  count$ : Observable<number>;
  dobuleCount$ : Observable<number>;
 constructor( private store : Store<{counter : number}>){
  // this.count$ = store.select('counter');   //counter is the key which we have defined in the main.ts file for counterReducer.
  this.count$ = store.select(selectCount)
  this.dobuleCount$ = store.select(selectDoubleCount);
 }
 ngOnInit(): void {
 }

 ngOnDestroy(): void {

 }
}
