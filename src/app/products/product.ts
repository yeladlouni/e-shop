type Category = 'Bureau' | 'IT' | 'Home';

export class Product {
  constructor(
    public id: number,
    public label: string,
    public description: string,
    public price: number,
    public category: Category,
    public production_date: Date,
    public expiration_date: Date,
  ) {}
};
