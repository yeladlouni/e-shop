import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../products/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[] | null, category: string | undefined): Product[] {
    if (category === undefined && products !== null)
      return products;
    else if (products === null)
      return [];
    return products.filter(p => p.category === category )
  }

}
