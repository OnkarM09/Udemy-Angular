import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription, map } from 'rxjs';
import { Post } from './posts.model';
import { PostService } from './post.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor(private authService : AuthService){}
  ngOnInit(): void {
      this.authService.autoLogin();
  }
}
