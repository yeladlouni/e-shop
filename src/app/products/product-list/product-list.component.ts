import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

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

  constructor(productsService: ProductsService, private authService: AuthService) {
    authService.login().subscribe();
    this.products$ = productsService.getProducts();

  }

  isAuthenticated(): boolean {
    return this.authService.token !== '';
  }

  ngOnInit(): void {
  }

  selectCategory(selectedCategory: string | undefined) {
    this.selectedCategory = selectedCategory;
  }

}
