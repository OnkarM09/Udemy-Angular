import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes are so amazing and better and simple to use';
  todaysDate = new Date();
  // async pipe
  checkVal = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value after 2 seconds");

    }, 2000)
  })

}
