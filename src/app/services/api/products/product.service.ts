import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/products-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) { }

  getAllProductsWithLimit(limit: number = 5): Observable<Array<ProductRepresentation>> {
    const productsUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProduct(product: ProductRepresentation): Observable<Object> {
    return this.http.post<ProductRepresentation>('https://fakestoreapi.com/products', product);
  }
}
