import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from "src/environments/environment";
import { albumDTO } from 'src/app/models/albumDTO';
import { photoDTO } from '../models/photoDTO';

const API_URL = environment.URI_BASE;

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
    albumList: albumDTO[] = [];
    photos: photoDTO[] = [];

    constructor(private http: HttpClient) { }

    getAlbums(){
        this.http.get(API_URL+'/albums').subscribe(
        (data: any) => {
            this.albumList = data;
        },
        (error) => {
            console.error('Failed to fetch albums', error);
        }
        );
    }

    fetchPhotos(albumId: number){
        this.http
      .get(API_URL+`/albums/${albumId}/photos`)
      .subscribe(
        (data: any) => {
          this.photos[albumId] = data;
        },
        (error) => {
          console.error(`Failed to fetch photos for album ${albumId}`, error);
        }
      );
    }
}