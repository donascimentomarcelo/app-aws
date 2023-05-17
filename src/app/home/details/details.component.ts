import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public product: Product = new Product();
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.product = this.route.snapshot.data['product'];
  }
}
