import { Component } from '@angular/core';
import {LoggingService} from '../app/Services/first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]   //By this anuglar will know how to create service for us.
})
export class AppComponent {
  title = 'Services-and-Dependency-Injection';
  constructor(private logservice : LoggingService){

  }
  logData(){
    // const logService = new LoggingService();  //Bad way to create instances of services so don't use it.
    this.logservice.logToConsole('This is some message from the component');
  }
}
