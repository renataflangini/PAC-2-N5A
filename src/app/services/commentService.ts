import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from "src/environments/environment";
import { commentDTO } from '../models/commentDTO';

const API_URL = environment.URI_BASE;

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  commentList: commentDTO[] = [];
  

  constructor(private http: HttpClient) { }

  
  fetchComments(postId: number) {
    this.http
      .get(API_URL+`/posts/${postId}/comments`)
      .subscribe(
        (data: any) => {
          this.commentList[postId] = data;
        },
        (error) => {
          console.error(`Failed to fetch comments for post ${postId}`, error);
        }
      );
  }
}