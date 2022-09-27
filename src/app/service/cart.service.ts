import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../modal/Modal';

const NAME_KEY = 'NAME';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  addCartToUser(cart: Cart, idUser: number): Observable<Cart> {
    return this.http.post<Cart>(`http://localhost:8081/cart/addCartToUser/${idUser}`, cart);
  }


  deleteCart(id: number): Observable<Cart> {
    return this.http.delete<Cart>(`http://localhost:8081/cart/deleteCart/${id}`);
  }

  findCartsForUser(idUser: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`http://localhost:8081/cart/findCartsForUser/${idUser}`);
  }

  findCartById(id: number): Observable<Cart> {
    return this.http.get<Cart>(`http://localhost:8081/cart/findCartById/${id}`);
  }

  removeFromCart(idCart: number, idUser: number): Observable<Cart> {
    return this.http.delete<Cart>(`http://localhost:8081/cart/removeFromCart/${idCart}/${idUser}`);
  }

  findByCartName(name: string): Observable<Cart> {
    return this.http.get<Cart>(`http://localhost:8081/cart/findByCartName/${name}`);
  }

  saveCartName(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }

  getCartName(): string {
    return sessionStorage.getItem(NAME_KEY);
  }
}
