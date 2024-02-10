import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  @ViewChild('viewChildForm') vcForm! : NgForm;
  @ViewChild ('sampleForm') sampleForm! : NgForm;
  gender = ['male', 'female'];
  user = {
    name : '',
    email : '',
    childVal : ''
  }

  onSubmit(form : NgForm) : void{
    console.log("Form is submitted");
    console.log(form);
  }

  onSubmitViewChildForm(){
    console.log(this.vcForm);
  }

  addName(){
    // this.sampleForm.setValue({
    //   userName : '',
    //   userEmail : '',
    //   childInputProp : {
    //     childFormInput : 'Maverick!!'
    //   }
    // })

    this.sampleForm.form.patchValue({
      childInputProp:{
        childFormInput : 'Maverick'
      }
    })
  }

  onSubmitSampleForm(){
    this.user.name = this.sampleForm.value.userName;
    this.user.email = this.sampleForm.value.userEmail;
    this.user.childVal = this.sampleForm.value.childInputProp.childFormInput;
    this.sampleForm.reset();
  }
}
