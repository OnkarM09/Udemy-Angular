import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  subscriptionParams : Subscription;

  constructor(private activateRoute : ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.activateRoute.snapshot.params['userId'],
      name: this.activateRoute.snapshot.params['userName']
    }
    //Snapshot won't work if you are on the same route and if the params of url has been changed and it won't update the latest value
    // So we use params observable to detect change when params are changed and then it updates the latest value.
    this.subscriptionParams = this.activateRoute.params
    .subscribe((params : Params) => {
      this.user.id=params['userId'];
      this.user.name=params['userName'];
    })
  }

  ngOnDestroy(){
    this.subscriptionParams.unsubscribe();
  }

}
