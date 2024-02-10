import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-assignment',
  templateUrl: './reactive-assignment.component.html',
  styleUrls: ['./reactive-assignment.component.css']
})
export class ReactiveAssignmentComponent implements OnInit {
  projectStatus: Array<string> = ['stable', 'critical', 'finished'];
  projectForm!: FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl('', [Validators.required], this.asyncValidateProjectName),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmitProjectForm(): void {
    console.log(this.projectForm)
  }

  validateProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value == 'Test') {
      return {
        "isInvalidName": true
      }
    } else {
      return {
        'isInvalidName': false
      }
    }
  }

  // async
  asyncValidateProjectName(control: AbstractControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'Test') {
          resolve({
            'isInvalidProjectName': true
          });
        }
        else {
          resolve(null);
        }
      }, 1000)
    });
  }
}
