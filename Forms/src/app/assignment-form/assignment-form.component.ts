import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit{

  subscriptions = ['basic', 'advanced', 'pro'];
  @ViewChild('form', {static: true}) form! : NgForm;


  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.form.value);

  }



  @ViewChild('loginForm', {static: true}) loginForm! : NgForm;

  onEnterLogin(){
    console.log(this.loginForm.value);
  }

}
