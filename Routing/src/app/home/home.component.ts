import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { } //First step is to inject router.

  ngOnInit() {
  }

  onLoadServers(serverId : number){
    //Some caulculation and now we want to navigate to the somewhere else.
    //1. Inject router.
    this.router.navigate(['/servers', serverId , 'edit'], {queryParams: {allowEdit : '1'}, fragment: 'loading'});
  }

}
