import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(){
    console.log("constructor has been called");
  }
  ngOnInit(): void {
     console.log("Ng on init");
  }
  title = '';
  childVal : string = '';
  inputVal : any = '';

  @ViewChild('nameInp') inputContent! : ElementRef ;

  pushTOChild(){
    this.title = 'Push to child';
  }
  takingFromChild(value : string){
    this.childVal = value;
  }
  showInputVal(someInput: HTMLInputElement){
    this.inputVal = someInput.value;
  }

  showElementRef(){
    console.log(this.inputContent.nativeElement.value); //Never add dom with this its a bad practice
  }
}
