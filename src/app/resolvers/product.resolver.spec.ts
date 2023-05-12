import { TestBed } from '@angular/core/testing';

import { ProductResolver } from './product.resolver';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from '../services/product.service';
import { of } from 'rxjs';
import { Product, ProductBuilder } from '../models/product';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';

describe('ProductResolver', () => {
  let resolver: ProductResolver;
  let route: ActivatedRoute;
  const productMock: Product = ProductBuilder.getProduct();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductResolver,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: jest.fn(() => 1) } } },
        },
        {
          provide: ProductService,
          useValue: { findOne: () => of(productMock) },
        },
      ],
    });
    resolver = TestBed.inject(ProductResolver);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should be created a', () => {
    const observable = resolver.resolve(
      route.snapshot,
      {} as RouterStateSnapshot
    );

    observable.subscribe(product => {
      expect(product.id).toBe(productMock.id);
      expect(product.version).toBe(productMock.version);
      expect(product.dateCreated).toBe(productMock.dateCreated);
      expect(product.lastUpdated).toBe(productMock.lastUpdated);
      expect(product.name).toBe(productMock.name);
      expect(product.subtitle).toBe(productMock.subtitle);
      expect(product.price).toBe(productMock.price);
    });
  });
});
