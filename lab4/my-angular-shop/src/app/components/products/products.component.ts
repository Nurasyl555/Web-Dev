import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      image: 'https://kaspi.kz/image1.jpg',
      name: 'Смартфон Samsung',
      description: 'Мощный и стильный смартфон',
      rating: 4.5,
      link: 'https://kaspi.kz/product/samsung'
    },
    {
      image: 'https://kaspi.kz/image2.jpg',
      name: 'Ноутбук Asus',
      description: 'Игровой ноутбук с мощной видеокартой',
      rating: 4.8,
      link: 'https://kaspi.kz/product/asus-laptop'
    }
    // Добавьте еще минимум 8 товаров
  ];

  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
