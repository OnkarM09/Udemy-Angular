import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription, map } from 'rxjs';
import { Post } from './posts.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'http-firebase';
  posts: Array<Post> = [];
  isLoading: boolean = false;
  isError  :any =null;
  private handleError! : Subscription;


  @ViewChild('newForm', { static: true }) form!: NgForm;

  constructor(private http: HttpClient,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getData();
     this.handleError= this.postService.error.subscribe( errorMsg =>{
      this.isError = errorMsg;
    })
  }
  onSubmitForm() {
    console.log(this.form.value);
    this.form.reset();
    this.getData();
  }


  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData);
    this.form.reset();
  }

  onGetData() {
    this.getData();
  }

  onClearPosts(){
    this.postService.cleaAllPosts().subscribe((response) =>{
      console.log(response);
    })
  }

  private getData() {
    this.isLoading = true;
    this.postService.getPosts().subscribe((data) => {
      this.isLoading = false;
      this.posts = data;
    },
    error =>{
      this.isLoading = false;
      this.isError = error.message;
    }
    )
  }


  ngOnDestroy(): void {
      this.handleError.unsubscribe();
  }
}
