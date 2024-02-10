import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./posts.model";
import { Subject, catchError, exhaustMap, map, take, tap, throwError } from "rxjs";
import { AuthService } from "./auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  error = new Subject<string>();

  constructor(private http: HttpClient,
    private authService: AuthService
  ) { }

  createAndStorePost(postData: Post) {
    this.http.post('https://real-time-db-435ea-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      postData,

      {
        observe: 'response'
      })
      .subscribe(response => {
        console.log(response)
      },
        error => {
          this.error.next(error.message);
        })
  }

  getPosts() {
    return this.http.get('https://real-time-db-435ea-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json').
      pipe(
        map((res: any) => {
          const postArr: Post[] = [];
          console.log(res);
          for (let key in res) {
            console.log(key);
            console.log(res[key]);
            console.log({ ...res[key], id: key });
            if (res.hasOwnProperty(key)) {
              postArr.push({ ...res[key], id: key });
            }
          }
          return postArr;
        }),
        catchError(errorMsg => {
          return throwError(errorMsg);
        })
      )
  }

  cleaAllPosts() {
    return this.http.delete('https://real-time-db-435ea-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', {
      observe: 'events',
    }).pipe(tap(event => {
      console.log(event)
      if (event.type === HttpEventType.Response) {
        console.log('respone is added')
        console.log(event.body)
      }
    }));
  }
}
