import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public products: Product[] = [];
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getAll();
  }

  public getAll(): void {
    this.productService
      .getAll()
      .subscribe((resp: Product[]) => (this.products = resp));
  }

  public details(product: Product): void {
    this.router.navigate([`/${product.id}/details`]);
  }
}
