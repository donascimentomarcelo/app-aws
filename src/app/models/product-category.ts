export class ProductCategory {
  constructor(
    public id: string,
    public version: number,
    public dateCreated: string,
    public lastUpdated: string,
    public category: string
  ) {}
}
