import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    new Product(1, 'TV', 'Télévision Samsung', 20000.00, 'Home', new Date(), new Date()),
    new Product(2, 'Laptop', 'Laptop Lenovo', 13000.34, 'IT', new Date(), new Date()),
    new Product(3, 'Table', 'Table de bois', 3000.13, 'Home', new Date(), new Date()),
    new Product(4, 'Fauteuil', 'Fauiteuil de salon', 14000.33, 'Home', new Date(), new Date()),
    new Product(5, 'Webcam', 'Webcam Sony', 500.22, 'IT', new Date(), new Date()),
    new Product(6, 'Bureau', 'Bureau professionnel', 5000.12, 'Bureau', new Date(), new Date())
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products$ = of(this.products);


    return products$;
  }
}
