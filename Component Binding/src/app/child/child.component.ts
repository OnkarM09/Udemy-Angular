import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit{
  constructor(){
    console.log("child constructor");
  }
  ngOnInit(): void {
    console.log('ng on inint form child')
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("ng on changes is called")
  }
 @Input('pushToChildProp') outputTitle: string = '';   //This is called Alias as we are defining what should be the name of the property outside of this component.
 @Output('bpCreate') backToPar = new EventEmitter<string>();

 backToParent(){
  this.backToPar.emit('Some value from child to the parent');
 }
}
