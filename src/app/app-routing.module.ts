import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { AlbumListComponent } from './components/album-list/album-list.component';
import { PostsComponent } from './components/posts/posts.component';
import { AlbumphotosComponent } from './components/albumphotos/albumphotos.component';

const routes: Routes = [
   { path: 'posts', component: PostsComponent },
   { path: 'albums', component: AlbumListComponent },
   { path: 'albums/photos', component: AlbumphotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
