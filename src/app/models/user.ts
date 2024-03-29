import { IUser } from '../interfaces/iuser';
import { set, get } from 'lodash-es';

export class User implements IUser {
  constructor(data) {
    set(this, 'data', data);
  }

  getData() {
    return get(this, 'data');
  }

  get email(): string {
    return get(this, 'data.email');
  }

  set email(value: string) {
    set(this, 'data.email', value);
  }

  get password(): string {
    return get(this, 'data.password');
  }

  set password(value: string) {
    set(this, 'data.password', value);
  }

  get address(): string {
    return get(this, 'data.address');
  }

  set address(value: string) {
    set(this, 'data.address', value);
  }
}
