import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { FormsModule } from '@angular/forms';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AlbumsComponent, // Standalone-компоненты
    AlbumDetailComponent,
    AlbumPhotosComponent,
    AppComponent
  ],
  bootstrap: []
})
export class AppModule { }

