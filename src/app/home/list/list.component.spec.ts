import { FixNavigationTriggeredOutsideAngularZoneNgModuleModule } from './../../fix-navigation-triggered-outside-angular-zone-ng-module/fix-navigation-triggered-outside-angular-zone-ng-module.module';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ListComponent } from './list.component';
import { SharedModule } from './../../shared/shared.module';
import { Product } from './../../models/product';
import { Author } from './../../models/author';
import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';
import { DetailsComponent } from '../details/details.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let product: Product;
  let productService: ProductService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: '', component: ListComponent },
          { path: ':id/details', component: DetailsComponent },
          { path: '**', redirectTo: '' },
        ]),
        FixNavigationTriggeredOutsideAngularZoneNgModuleModule,
        SharedModule,
      ],
      providers: [ProductService],
    }).compileComponents();

    product = buildProduct();

    fixture = TestBed.createComponent(ListComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([ProductService], (service: ProductService) => {
    productService = service;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component', () => {
    const productList: Product[] = [product];
    jest.spyOn(productService, 'getAll').mockReturnValue(of(productList));
    component.ngOnInit();

    expect(component.products[0].id).toBe(product.id);
    expect(component.products[0].version).toBe(product.version);
    expect(component.products[0].dateCreated).toBe(product.dateCreated);
    expect(component.products[0].lastUpdated).toBe(product.lastUpdated);
    expect(component.products[0].name).toBe(product.name);
    expect(component.products[0].subtitle).toBe(product.subtitle);
    expect(component.products[0].price).toBe(product.price);
  });

  it('should get a product list', () => {
    const productList: Product[] = [product];
    jest.spyOn(productService, 'getAll').mockReturnValue(of(productList));
    component.getAll();

    expect(component.products[0].id).toBe(product.id);
    expect(component.products[0].version).toBe(product.version);
    expect(component.products[0].dateCreated).toBe(product.dateCreated);
    expect(component.products[0].lastUpdated).toBe(product.lastUpdated);
    expect(component.products[0].name).toBe(product.name);
    expect(component.products[0].subtitle).toBe(product.subtitle);
    expect(component.products[0].price).toBe(product.price);
  });

  it('should get a product list a', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    component.details(product);
    expect(navigateSpy).toHaveBeenCalledWith([`/${product.id}/details`]);
  });

  const buildProduct = () => {
    return new Product(
      1,
      1,
      '05-05-2023',
      '05-05-2023',
      'Spring Training',
      'Spring Boot + Hibernate',
      'Full training about spring boot',
      buildAuthor(),
      100
    );
  };
  const buildAuthor = () => {
    return new Author(
      1,
      1,
      '05-05-2023',
      '05-05-2023',
      'Kyle',
      'Crane',
      'photo.jpg'
    );
  };
});
