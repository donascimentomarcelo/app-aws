import { ProductCategory } from './product-category';

describe('ProductCategory', () => {
  it('should create an instance', () => {
    expect(
      new ProductCategory(1, 1, '05-05-2023', '05-05-2023', 'Training')
    ).toBeTruthy();
  });
});
