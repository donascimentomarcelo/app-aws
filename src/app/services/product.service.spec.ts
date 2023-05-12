import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Paths } from '../constants/paths';
import { environment } from './../../environments/environment';
import { Product, ProductBuilder } from '../models/product';

describe('ProductService', () => {
  let service: ProductService;
  let httpController: HttpTestingController;
  const mockedListProduct: Array<Product> = [
    new ProductBuilder().withId(1).build(),
    new ProductBuilder().withId(2).build(),
    new ProductBuilder().withId(3).build(),
  ];
  const productMock: Product = new ProductBuilder().withId(1).build();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });

    service = TestBed.inject(ProductService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of products', () => {
    service.getAll().subscribe(res => {
      expect(res).toEqual(mockedListProduct);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.apiUrl}${Paths.PRODUCTS}`,
    });

    req.flush(mockedListProduct);
  });
  it('should return one product', () => {
    service.findOne('1').subscribe(res => {
      expect(res).toEqual(productMock);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.apiUrl}${Paths.PRODUCTS}/${1}`,
    });

    req.flush(productMock);
  });
});
