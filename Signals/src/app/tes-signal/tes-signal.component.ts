import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tes-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tes-signal.component.html',
  styleUrls: ['./tes-signal.component.css']
})
export class TesSignalComponent {

  count : WritableSignal<number> = signal(0);


  onIncrement(){
    this.count.update((previousVal) => previousVal + 1)
  }

  onDecrement(){
    this.count.update((previousVal) => previousVal - 1)
  }
}
