import { Injectable } from '@angular/core';
import { Product, ProductDTO } from './product';
import { Observable, filter, map, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Using a static products array
  /*
  products = [
    new Product(1, 'TV', 'Télévision Samsung', 20000.00, 'Home', new Date(), new Date()),
    new Product(2, 'Laptop', 'Laptop Lenovo', 13000.34, 'IT', new Date(), new Date()),
    new Product(3, 'Table', 'Table de bois', 3000.13, 'Home', new Date(), new Date()),
    new Product(4, 'Fauteuil', 'Fauiteuil de salon', 14000.33, 'Home', new Date(), new Date()),
    new Product(5, 'Webcam', 'Webcam Sony', 500.22, 'IT', new Date(), new Date()),
    new Product(6, 'Bureau', 'Bureau professionnel', 5000.12, 'Bureau', new Date(), new Date())
  ];
  */


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const products$ = this.http
      .get<ProductDTO[]>(environment.apiUrl)
      .pipe(
        map(products => products.map(product => {
          return {
            id: product.id,
            label: product.title,
            description: product.description,
            category: product.category,
            price: product.price,
            image: product.image,
            production_date: new Date(),
            expiration_date: new Date()
          }
        }))
      );

    return products$;
  }
}
