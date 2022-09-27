import { Product, Tag } from './../modal/Modal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProductToCategory(product: Product, idCategory: number): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8081/product/addProductToCategory/${idCategory}`, product);
  }

  editProduct(product: Product, id: number): Observable<Product> {
    return this.http.put<Product>(`http://localhost:8081/product/editProduct/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`http://localhost:8081/product/deleteProduct/${id}`);
  }

  findProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8081/product/findProductById/${id}`);
  }

  findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8081/product/findAllProducts`);
  }

  findProductsForCategory(idCategory: number): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8081/product/findProductsForCategory/${idCategory}`);
  }
  deleteProductFromTag(idProduct: number, idTag: number): Observable<Product> {
    return this.http.delete<Product>(`http://localhost:8081/product/deleteProductFromTag/${idProduct}/${idTag}`);
  }
  findByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8081/product/findByName/${name}`);
  }


}
