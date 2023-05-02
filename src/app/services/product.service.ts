import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment as env } from 'src/environment/environment';
import { Paths } from '../constants/paths';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${env.apiUrl}${Paths.PRODUCTS}`);
  }

  public findOne(id: string): Observable<Product> {
    return this.http.get<Product>(`${env.apiUrl}${Paths.PRODUCTS}/${id}`);
  }
}
