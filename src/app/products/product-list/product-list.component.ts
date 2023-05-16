import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  selectedProduct: Product | undefined;

  products: Product[] = [
    new Product(1, 'TV', 'Télévision Samsung', 20000.00, 'Home', new Date(), new Date()),
    new Product(2, 'Laptop', 'Laptop Lenovo', 13000.34, 'IT', new Date(), new Date()),
    new Product(3, 'Table', 'Table de bois', 3000.13, 'Home', new Date(), new Date()),
    new Product(4, 'Fauteuil', 'Fauiteuil de salon', 14000.33, 'Home', new Date(), new Date()),
    new Product(5, 'Webcam', 'Webcam Sony', 500.22, 'IT', new Date(), new Date()),
    new Product(6, 'Bureau', 'Bureau professionnel', 5000.12, 'Bureau', new Date(), new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
