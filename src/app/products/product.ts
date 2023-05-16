type Category = 'Bureau' | 'IT' | 'Home';

export class Product {
  constructor(
    public id: number,
    public label: string,
    public description: string,
    public price: number,
    public category: string,
    public production_date: Date,
    public expiration_date: Date,
    public image: string
  ) {}
};

export class ProductDTO {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public category: string,
    public price: number,
    public image: string
  ) {}
}
