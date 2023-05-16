import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../products/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], category: string): Product[] {
    return products.filter(p => p.category === category )
  }

}
