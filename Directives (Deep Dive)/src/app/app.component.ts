import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNum : any = [1,3,5,7];
  evenNum : any = [2,4,6,9];
  isOdd : boolean = false;

  onOddEven() : void {
    this.isOdd = !this.isOdd;
  }

}
