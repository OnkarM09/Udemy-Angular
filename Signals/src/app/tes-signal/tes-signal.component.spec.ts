import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesSignalComponent } from './tes-signal.component';

describe('TesSignalComponent', () => {
  let component: TesSignalComponent;
  let fixture: ComponentFixture<TesSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TesSignalComponent]
    });
    fixture = TestBed.createComponent(TesSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
