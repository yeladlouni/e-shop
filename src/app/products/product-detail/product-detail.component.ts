import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [
    new Product(1, 'TV', 'Télévision Samsung', 20000.00, 'Home', new Date(), new Date()),
    new Product(1, 'Laptop', 'Laptop Lenovo', 13000.34, 'IT', new Date(), new Date()),
    new Product(1, 'Table', 'Table de bois', 3000.13, 'Home', new Date(), new Date()),
    new Product(1, 'Fauteuil', 'Fauiteuil de salon', 14000.33, 'Home', new Date(), new Date()),
    new Product(1, 'Webcam', 'Webcam Sony', 500.22, 'IT', new Date(), new Date()),
    new Product(1, 'Bureau', 'Bureau professionnel', 5000.12, 'Bureau', new Date(), new Date())
  ];

  @Input() selectedProduct: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
