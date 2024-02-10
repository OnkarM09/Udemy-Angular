import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading : boolean = false;
  error : string  = '';

  constructor(private authService: AuthService,
      private route : Router
    ) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmitLoginForm(form: NgForm) {

    if (form.valid) {

    let authObs : Observable<AuthResponse>;
      if (this.isLoginMode) {
        this.isLoading = true;
        authObs =this.authService.loginReq(form.value);
      } else {
        this.isLoading = true;
        authObs = this.authService.signUpReq(form.value);
      }
      authObs.subscribe((responseData) => {
        console.log(responseData);
        this.route.navigate(['/todo-list']);
        this.isLoading = false;
      },
        error => {
          console.log(error);
          this.error = error;
          this.isLoading = false;
        })
    } else {
      return;
    }
    form.reset();
  }
}
