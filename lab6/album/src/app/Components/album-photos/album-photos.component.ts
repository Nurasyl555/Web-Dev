import { Component ,OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AlbumsService} from '../../services/albums.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];
  album: any;

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getPhotos(1).subscribe(
      (data) => {
        console.log('Фотографии загружены:', data); // Проверяем, приходят ли данные
        this.photos = data;
      },
      (error) => console.error('Ошибка загрузки фотографий:', error)
    );
  }
}
