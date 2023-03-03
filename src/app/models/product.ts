import { IProduct } from '../interfaces/iproduct';
import { set, get, forEach } from 'lodash-es';

export class Product implements IProduct {
  constructor(data: any) {
    set(this, 'data', data);
  }

  get price() {
    return get(this, 'data.price');
  }

  get extras() {
    return get(this, 'data.extras');
  }

  get name() {
    return get(this, 'data.name');
  }

  get img() {
    return get(this, 'data.img');
  }

  get idCategory() {
    return get(this, 'data.idCategory');
  }

  get showDetail() {
    return get(this, 'data.showDetail');
  }

  set showDetail(value: boolean) {
    set(this, 'data.showDetail', value);
  }

  get quantity() {
    return get(this, 'data.quantity');
  }

  set quantity(value: number) {
    set(this, 'data.quantity', value);
  }

  getExtras() {
    const extras = [];

    forEach(this.extras, (extra) => {
      const products = extra.products;
      forEach(products, (product) => {
        if (product.optionSelected) {
          extras.push({
            "name": product.name,
            "selected": product.optionSelected.name,
          });
        } else if (product.options[0].activate) {
          extras.push({
            "name": product.name,
          });
        }
      });
    });

    return extras;
  }

  totalPrice() {
    let total = this.price;

    forEach(this.extras, (extra) => {
      const products = extra.products;
      forEach(products, (product) => {
        if (product.optionSelected) {
          total += product.optionSelected.price;
        } else if (product.options[0].activate) {
          total += product.options[0].price;
        }
      });
    });

    return total;
  }
}
