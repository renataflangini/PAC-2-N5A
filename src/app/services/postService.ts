import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from "src/environments/environment";
import { postDTO } from '../models/postDTO';

const API_URL = environment.URI_BASE;

@Injectable({
  providedIn: 'root'
})

export class PostService {
  postList: postDTO[] = [];
  

  constructor(private http: HttpClient) { }

  
  fetchPosts() {
    this.http.get(API_URL+'/posts').subscribe(
      (data: any) => {
        this.postList = data;
      },
      (error) => {
        console.error('Failed to fetch posts', error);
      }
    );
  }
}