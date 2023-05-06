import { TestBed } from '@angular/core/testing';

import { ProductResolver } from './product.resolver';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductResolver', () => {
  let service: ProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductResolver],
    });
    service = TestBed.inject(ProductResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
