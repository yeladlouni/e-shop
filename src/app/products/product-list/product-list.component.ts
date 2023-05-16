import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  selectedProduct: Product | undefined;
  selectedCategory: string | undefined;
  products$: Observable<Product[]>;
  products: Product[] = [];

  constructor(productsService: ProductsService) {
    this.products$ = productsService.getProducts();
  }

  ngOnInit(): void {
  }

  selectCategory(selectedCategory: string | undefined) {
    this.selectedCategory = selectedCategory;
  }

}
