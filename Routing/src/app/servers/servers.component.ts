import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
    private router: Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    // this.router.navigate(['/servers']);
    // this.router.navigate(['servers']);

    // IMP
    // There is a catch here
    // if we remove the / in the routerLink then it doesn't work as its a relative path,
    // but it works if we use navigate so why?
    // Unlike routerLink the navigate doesn't know on which route you currently are where as
    // routerLink knows where is route currently sits and which component is loaded.
    // So we can do this configuration for navigate as well by passing the second argument

    this.router.navigate(['servers'], {relativeTo: this.activatedRoute});  //Default is root, thats why we dont get error for above scenario.
  }

}
