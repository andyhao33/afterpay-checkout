import { Injectable } from '@angular/core';
import { Order } from '../shared/order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  createOrderUrl = "https://api.us.afterpay.com/v1/orders"

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.createOrderUrl, order, httpOptions)
    // TODO: Error handling needed for future development
  }

}
