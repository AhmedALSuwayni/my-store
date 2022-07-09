import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:5000/products');
  }
  getProductById(id :Number): Observable<Product>{
    // const httpParams = new HttpParams({
    //   fromObject: {
    //     query: id+""
    //   }
    // })
    return this.http.get<Product>('http://localhost:5000/products/'+id);
  }
}
