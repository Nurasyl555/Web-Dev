import { Injectable } from '@angular/core';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  setProducts(products: Product[]) {
    this.products = products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
