import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [      //You can pass any name to trigger function
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),      //Need to match with the below name which we have defined
      state('highlighted', style({
        'background-color': 'teal',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(700))
    ]),
    trigger('wildState', [      //You can pass any name to trigger function
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),      //Need to match with the below name which we have defined
      state('highlighted', style({
        'background-color': 'teal',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        // transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal',[
        style({
          'background-color': 'orange',
        }),
        animate(1000,style({
          'border-radius': '50%'
        })),
        animate(500, style({
          'border-radius' : '25%'
        }))
      ]),
      transition('shrunken <=> *', animate(300))
    ]),
    trigger('list1', [      //You can pass any name to trigger function
    state('in', style({
      'background-color': 'red',
      'opacity' : '1',
      transform: 'translateX(0)'
    })),
    transition('void=> *',[
      style({
        opacity : 0,
        transform : 'translateX(100px)'
      }),
      animate(300)
    ]),
    // transition('highlighted => normal', animate(700))
  ]),
  trigger('list2', [      //You can pass any name to trigger function
  state('in', style({
    'background-color': 'red',
    'opacity' : '1',
    transform: 'translateX(0)'
  })),
  transition('void=> *',[
    style({
      opacity : 0,
      transform : 'translateX(100px)'
    }),
    animate(1000, keyframes([
      style({
        transform : 'translateX(100px)',
        opacity : 0,
        offset : 0
      }),
      style({
        trransform : 'translateX(50px)',
        opacity : 0.5,
        offset : 0.5
      }),
      style({
        trransform : 'translateX(20px)',
        opacity : 1,
        offset : 0.9
      })
    ]))
  ]),
  // transition('highlighted => normal', animate(700))
])
  ]
})
export class AppComponent implements AfterViewInit{
  title = 'animations';
  state = 'normal';
  wildState = 'normal';

  listArr : any= [];

  @ViewChild ('inputVal') targetInput! : ElementRef;
  ngAfterViewInit(): void {
    this.listArr.push(this.targetInput.nativeElement.value)
  }
  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState == 'shrunken';
  }
  onClickMe(){
    this.listArr.push(this.targetInput.nativeElement.value)
  }

  onStartAnimation(event : any){
    console.log(event);
  }

  onEndAnimation(event : any){
    console.log(event);
  }
}
