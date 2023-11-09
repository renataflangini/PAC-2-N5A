import { Component, OnInit } from '@angular/core';
import { PostService } from './services/postService';
import { postDTO } from './models/postDTO';
import { CommentService } from './services/commentService';
import { commentDTO } from './models/commentDTO';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:any = 'pac-2';
  posts: postDTO[] = [];
  comments: commentDTO[] = [];
  showComments: { [postId: number]: any } = {};

  constructor(private postService: PostService, private commentService: CommentService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.fetchPosts();
  }

  toggleComments(postId: number) {
    if (this.showComments[postId]) {
      this.showComments[postId] = false;
    } else {
      this.fetchComments(postId);
      this.showComments[postId] = true;
    }
  }

  fetchComments(postId: number) {
    this.commentService.fetchComments(postId);
  }
}
