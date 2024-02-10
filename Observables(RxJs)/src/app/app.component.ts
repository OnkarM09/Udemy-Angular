import { Component, OnInit } from '@angular/core';
import { ActivateService } from './activate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isActivate: boolean = false;
  constructor(private activeService : ActivateService) {}

  ngOnInit() {
    // this.activeService.activateFlag.subscribe((flag)=>{
    //   this.isActivate = flag;
    // });

    this.activeService.activateSubject.subscribe((flag)=>{
      this.isActivate = flag;
    })
  }
}
