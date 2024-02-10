import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../posts.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  title = 'http-firebase';
  posts: Array<Post> = [];
  isLoading: boolean = false;
  isError  :any =null;
  private handleError! : Subscription;


  @ViewChild('newForm', { static: true }) form!: NgForm;

  constructor(private http: HttpClient,
    private postService: PostService,
    private authService : AuthService
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

  onLogoout(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
      this.handleError.unsubscribe();
  }


}
