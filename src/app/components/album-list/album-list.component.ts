import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumService } from '../../services/albumService';
import { albumDTO } from 'src/app/models/albumDTO';
import { photoDTO } from 'src/app/models/photoDTO';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: albumDTO[] = [];
  photos: photoDTO[] = [];
  showPhotos: { [albumId: number]: boolean } = {};

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums() {
    this.albumService.getAlbums();
  }

  togglePhotos(albumId: number) {
    if (this.showPhotos[albumId]) {
      this.showPhotos[albumId] = false;
    } else {
      this.fetchPhotos(albumId);
      this.showPhotos[albumId] = true;
    }
  }

  fetchPhotos(albumId: number) {
    this.albumService.fetchPhotos(albumId);
  }
}
