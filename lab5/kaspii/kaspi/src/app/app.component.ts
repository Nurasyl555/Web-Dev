import { Component } from '@angular/core';
import { Category, Product } from 'src/app/models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormGroup } from '@angular/forms';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  categories: Category[] = [
    {
      name: 'Smartphones',
      products: [
        { id: 1, name: 'iPhone 15 Pro', image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium', description: 'Apple phone', rating: 4.9, likes: 0 },
        { id: 2, name: 'Samsung Galaxy S23', image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium', description: 'Samsung phone', rating: 4.8, likes: 0 },
        { id: 3, name: 'Google Pixel 7', image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h44/86597112987678.png?format=gallery-medium', description: 'Google phone', rating: 4.7, likes: 0 },
        { id: 4, name: 'OnePlus 11', image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hd0/69204747845662.jpg?format=gallery-medium', description: 'OnePlus phone', rating: 4.6, likes: 0 },
        { id: 5, name: 'Xiaomi 13', image: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/hcc/85710300741662.png?format=gallery-medium', description: 'Xiaomi phone', rating: 4.5, likes: 0 }
      ]
    },
    {
      name: 'Laptops',
      products: [
        { id: 6, name: 'MacBook Pro', image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h18/64372891975710.jpg?format=gallery-medium', description: 'Apple laptop', rating: 4.9, likes: 0 },
        { id: 7, name: 'Dell XPS 15', image: 'https://resources.cdn-kaspi.kz/img/m/p/paf/p90/26151125.jpg?format=gallery-medium', description: 'Dell laptop', rating: 4.8, likes: 0 },
        { id: 8, name: 'HP Spectre x360', image: 'https://resources.cdn-kaspi.kz/img/m/p/h82/hbb/85832389918750.png?format=gallery-large', description: 'HP laptop', rating: 4.7, likes: 0 },
        { id: 9, name: 'Asus ZenBook', image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h86/86623561220126.png?format=gallery-medium', description: 'Asus laptop', rating: 4.6, likes: 0 },
        { id: 10, name: 'Lenovo ThinkPad', image: 'https://resources.cdn-kaspi.kz/img/m/p/p54/pa9/21452293.png?format=gallery-medium', description: 'Lenovo laptop', rating: 4.5, likes: 0 }
      ]
    },
    {
      name: 'TVs',
      products: [
        { id: 11, name: 'Samsung QLED 4K', image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h21/85990957187102.jpg?format=gallery-medium', description: 'Samsung Smart TV', rating: 4.8, likes: 0 },
        { id: 12, name: 'LG OLED C2', image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/h3b/86373103796254.jpg?format=gallery-medium', description: 'LG OLED TV', rating: 4.9, likes: 0 },
        { id: 13, name: 'Sony Bravia XR', image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/h94/64042690052126.jpg?format=gallery-medium', description: 'Sony Smart TV', rating: 4.7, likes: 0 },
        { id: 14, name: 'TCL 6-Series', image: 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p1a/23464337.png?format=gallery-medium', description: 'TCL 4K TV', rating: 4.6, likes: 0 },
        { id: 15, name: 'Hisense U8H', image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p0c/3039335.png?format=gallery-medium', description: 'Hisense Smart TV', rating: 4.5, likes: 0 }
      ]
    },
    {
      name: 'Accessories',
      products: [
        { id: 16, name: 'Apple AirPods Pro', image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium', description: 'Apple wireless earbuds', rating: 4.9, likes: 0 },
        { id: 17, name: 'Samsung Galaxy Buds', image: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/hd7/84329425305630.png?format=gallery-medium', description: 'Samsung wireless earbuds', rating: 4.8, likes: 0 },
        { id: 18, name: 'Logitech MX Master 3', image: 'https://resources.cdn-kaspi.kz/img/m/p/pad/p8e/25625883.jpg?format=gallery-medium', description: 'Wireless ergonomic mouse', rating: 4.7, likes: 0 },
        { id: 19, name: 'Razer BlackWidow V3', image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/h90/64097444102174.jpg?format=gallery-medium', description: 'Mechanical gaming keyboard', rating: 4.6, likes: 0 },
        { id: 20, name: 'Anker PowerCore 20K', image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h65/85457544413214.jpg?format=gallery-medium', description: 'Portable power bank', rating: 4.5, likes: 0 }
      ]
    }
  ];
  selectedCategory: Category | null = null;

  searchQuery: string = '';

  

  get filteredProducts(): Product[] {
    if (!this.selectedCategory) return [];
    return this.selectedCategory.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.searchQuery = ''; 
  }
  constructor(private productService: ProductService) {
    this.productService.setProducts(this.categories.flatMap(c => c.products));
  }
}
