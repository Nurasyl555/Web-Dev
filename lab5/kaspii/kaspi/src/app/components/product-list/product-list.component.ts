import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  removeProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}
