export class ProductCategory {
  constructor(
    public id: number,
    public version: number,
    public dateCreated: string,
    public lastUpdated: string,
    public category: string
  ) {}
}
