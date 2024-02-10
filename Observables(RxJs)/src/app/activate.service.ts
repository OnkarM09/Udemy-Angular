import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivateService {
  subsbribe(arg0: (data: any) => void) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  activateFlag = new EventEmitter<boolean>(); // This is the old approach so now we will use new approach

  activateSubject = new Subject<boolean>();

}
