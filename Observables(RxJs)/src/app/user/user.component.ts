
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ActivateService } from '../activate.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,
   private activateServ : ActivateService) {
  }

  ngOnInit() {
    // So in below example params is an observable and subscribeOn is an opertator of observers who listense every time if
    // there is a change in data package and we also don't need to unsubscribe because params is an angular observable and angular observables automatically unsubscribe their subscriptions for you.
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate(){
    this.activateServ.activateFlag.emit(true);
    this.activateServ.activateSubject.next(true);
  }

}
