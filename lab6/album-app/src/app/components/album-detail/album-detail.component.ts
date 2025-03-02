import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService, Album } from '../../services/albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(album => {
      this.album = album;
    });
  }

  updateAlbum(): void {
    if (this.album) {
      this.albumsService.updateAlbum(this.album).subscribe(updatedAlbum => {
        this.album = updatedAlbum;
        alert('Название альбома обновлено!');
      });
    }
  }
}
