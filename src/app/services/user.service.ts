import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/user';

import { unset } from 'lodash-es';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private afd: AngularFireDatabase) {}

  addUser(user: User) {
    unset(user, 'password');
    this.afd.list('users').push(user);
  }

  getAddressUser(email: string) {
    return this.afd
      .list('users', (ref) => ref.orderByChild('email').equalTo(email))
      .valueChanges();
  }
}
