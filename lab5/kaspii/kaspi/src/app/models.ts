export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  likes: number;
}

export interface Category {
  name: string;
  products: Product[];
}
