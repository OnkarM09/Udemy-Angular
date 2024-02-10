import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor() { }
  stream = new Observable(observer => {
    let count = 1;
    setInterval(() => {
      observer.next(count);
      count++;
      if (count > 10) {
        observer.complete();
      }
    }, 1000);
  });


  ngOnInit() {
    // this.subscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });




    // const customObservable = Observable.create((observer) => {
    //   let count : number = 0;
    //   setInterval(() => {
    //     observer.next(count);           //Emitting data
    //     count++;
    //     if(count > 4){
    //       observer.error( new Error ('count is greater than 5'));
    //     }

    //     if(count > 3){
    //       observer.complete();
    //     }
    //   }, 1000);
    // });

    //  this.subscription = customObservable.subscribe((count)=>{
    //     console.log(count);
    //   },
    //     error =>{
    //       console.log(error);
    //       console.log(error.message)
    //     }, () =>{
    //       console.log('Completed')
    //     }
    //   )

    this.subscription = this.stream.pipe(filter((data : number) =>{ return data %2 == 0})
       , map((data: number) => { return data * 10 }))
      .subscribe((count) => {
        console.log(count);
      },
        error => {
          console.log(error);
          console.log(error.message)
        }, () => {
          console.log('Completed')
        }
      )


    // this.stream.subscribe((data) =>{
    //   console.log(data);
    // })

    // this.stream.subscribe({
    //   next : (count) =>{console.log(count);},
    //   complete : () => console.log('Completed'),
    //   error : (error) => console.log(error)
    // });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
