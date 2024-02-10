import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'dynamic-components';

  @ViewChild('dynamicLoader', {read: ViewContainerRef}) vcr! : ViewContainerRef;

  ngAfterViewInit(): void {
      const compRef = this.vcr.createComponent(DynamicComponent);
      compRef.instance.value = 6;
  }
}
