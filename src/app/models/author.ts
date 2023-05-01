export class Author {
  constructor(
    public id: number,
    public version: number,
    public dateCreated: string,
    public lastUpdated: string,
    public firstName: string,
    public lastName: string,
    public image: string
  ) {}
}
