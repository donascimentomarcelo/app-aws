import { Author } from './author';

export class Product {
  constructor(
    public id?: number,
    public version?: number,
    public dateCreated?: string,
    public lastUpdated?: string,
    public name?: string,
    public subtitle?: string,
    public description?: string,
    public author?: Author,
    public price?: number
  ) {}
}
export class ProductBuilder {
  private _prod: Product = new Product();

  public withId(id: number): ProductBuilder {
    this._prod.id = id;
    return this;
  }
  public withVersion(version: number): ProductBuilder {
    this._prod.version = version;
    return this;
  }
  public withDateCreated(dateCreated: string): ProductBuilder {
    this._prod.dateCreated = dateCreated;
    return this;
  }
  public withLastUpdated(lastUpdated: string): ProductBuilder {
    this._prod.lastUpdated = lastUpdated;
    return this;
  }
  public withName(name: string): ProductBuilder {
    this._prod.name = name;
    return this;
  }
  public withSubtitle(subtitle: string): ProductBuilder {
    this._prod.subtitle = subtitle;
    return this;
  }
  public withDescription(description: string): ProductBuilder {
    this._prod.description = description;
    return this;
  }
  public withAuthor(author: Author): ProductBuilder {
    this._prod.author = author;
    return this;
  }
  public withPrice(price: number): ProductBuilder {
    this._prod.price = price;
    return this;
  }

  public build(): Product {
    return this._prod;
  }

  public static getProduct() {
    return new ProductBuilder()
      .withId(1)
      .withVersion(1)
      .withDateCreated('05-05-2023')
      .withLastUpdated('05-05-2023')
      .withName('Spring Training')
      .withSubtitle('Spring Boot + Hibernate')
      .withDescription('Full training about spring boot')
      .build();
  }
}
