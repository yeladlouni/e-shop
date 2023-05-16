import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { ProductFilterPipe } from './product-filter.pipe';



@NgModule({
  declarations: [
    FooterComponent,
    CategoryFilterComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    CategoryFilterComponent,
    ProductFilterPipe
  ]
})
export class SharedModule { }
