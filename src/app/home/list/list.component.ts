import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getAll()
      .subscribe((resp: Product[]) => (this.products = resp));
  }
}
