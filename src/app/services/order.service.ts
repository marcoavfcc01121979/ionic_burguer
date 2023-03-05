import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private _order: Order;

  constructor(private afd: AngularFireDatabase) {
    this.clearOrder();
  }

  get order() {
    return this._order;
  }

  numProducts() {
    return this._order.numProducts();
  }

  totalOrder() {
    return this._order.totalOrder();
  }

  clearOrder() {
    this._order = new Order({});
  }
}
