import { Paths } from './paths';

describe('Paths', () => {
  it('should return the product path', () => {
    expect(Paths.PRODUCTS).toEqual('/api/products');
  });
});
