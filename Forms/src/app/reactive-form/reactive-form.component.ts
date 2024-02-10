import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  gender = ['male', 'female'];
  constructor(){}
  signupForm! : FormGroup;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'loginDetails': new FormGroup({
        'email' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
        'password' : new FormControl(null, [Validators.required])
      }),
      'g' : new FormControl('male'),
      'userNames' : new FormArray([])
    });

    // valuechanges
    // this.signupForm.valueChanges.subscribe((value)=>{
    //   console.log(value)
    // })

    // status changes pending to complete etc.
    this.signupForm.statusChanges.subscribe((status)=>{
      console.log(status);
    });

    this.signupForm.setValue({
      'loginDetails':{
        'email' : 'newuser@gmail.com',
        'password' : 'canttellyou'
      },
      'g' : 'male',
      'userNames' : []
    });

    this.signupForm.patchValue({
      'loginDetails' : {
        'email' : 'newuserssssss@gmail.com',
      }
    })
  }

  onSubmit() : void {
    console.log(this.signupForm);
    this.signupForm.reset();
  }
  onAddName() : void {
    const control  = new FormControl('defaule value', [Validators.required, this.customEmailValidator]);
    (<FormArray>this.signupForm.get('userNames')).push(control);
  }

  getUserNameControl(){
    return  (<FormArray>this.signupForm.get('userNames')).controls;
  }

  customEmailValidator(control : FormControl) : {[s : string ] : boolean}{
    if(control.value == 'songoku'){
      return {'god' : true}
    }
    return {'god' : false};
  }

  forbiddenEmails(control : AbstractControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) =>{
      setTimeout(() =>{
        if(control.value == 'admin1@gmail.com'){
          resolve({'emailIsForbidden' : true});
        }else{
          resolve(null);
        }
      },2000)
    })
    return promise;
  }
}
