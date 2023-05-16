import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(productsService: ProductsService) {
    this.products = productsService.getProducts();
  }

  ngOnInit(): void {
  }

}
