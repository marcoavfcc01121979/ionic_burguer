import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ICategory } from '../interfaces/icategory';
import { IProduct } from '../interfaces/iproduct';

@Injectable()
export class ProductService {
  constructor(private afd: AngularFireDatabase) {}

  getProducts(idCategory: number) {
    return this.afd
      .list<IProduct>('products', (ref) =>
        ref.orderByChild('idCategory').equalTo(idCategory)
      )
      .valueChanges();
  }

  getCategories() {
    return this.afd.list<ICategory>('categories').valueChanges();
  }
}
