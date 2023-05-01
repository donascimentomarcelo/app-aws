import { Author } from "./author";

export class Product {
  constructor(
    public id: number,
    public version: number,
    public dateCreated: string,
    public lastUpdated: string,
    public name: string,
    public subtitle: string,
    public description: string,
    public author: Author,
    public price: number,
  ) {}
}
