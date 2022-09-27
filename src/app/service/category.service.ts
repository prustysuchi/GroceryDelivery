import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategoryToUser(category: Category, idUser: number): Observable<Category> {
    return this.http.post<Category>(`http://localhost:8081/category/addCategoryToUser/${idUser}`, category);
  }
  editCategory(category: Category, id: number): Observable<Category> {
    return this.http.put<Category>(`http://localhost:8081/category/editCategory/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`http://localhost:8081/category/deleteCategory/${id}`);
  }

  findCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`http://localhost:8081/category/findCategoryById/${id}`);
  }

  findAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`http://localhost:8081/category/findAllCategories`);
  }

  findCategoriesForUser(idUser: number): Observable<Category[]> {
    return this.http.get<Category[]>(`http://localhost:8081/category/findCategoriesForUser/${idUser}`);
  }
}
