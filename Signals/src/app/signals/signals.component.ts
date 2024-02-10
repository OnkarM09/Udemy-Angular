import { NgFor } from '@angular/common';
import { Component, Signal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './singals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);  //You can pass any data to the signal
  doubleCounter = computed(() =>{
     return  this.counter() * 2
  });

  constructor(){
    effect(()=> console.log(this.counter));

  }

  increment() {
    // this.counter.set(1)
     this.counter.set(this.counter() + 1);
    // this.counter.update((oldCounter)=> oldCounter + 1);           //update method which takes old value for ex: .update(oldValue =>) and mutate method
    
    // this.actions.mutate((oldValue)=> oldValue.push('Increment'));
    this.actions.update((oldAction) => [...oldAction, 'Increment'])
    // this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((oldCounter)=> oldCounter - 1); 
    this.actions.update((oldAction) => [...oldAction, 'Decrement'])
  }
}
