import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit(this.product);
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent('https://www.ozon.ru/search/?text=' + this.product.name)}&text=${encodeURIComponent(this.product.name + ' - ' + this.product.description)}`;
    window.open(url, '_blank');
  }

  shareOnWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product.name + ' - ' + this.product.description + ' ' + 'https://www.ozon.ru/search/?text=' + this.product.name)}`;
    window.open(url, '_blank');
  }
}
