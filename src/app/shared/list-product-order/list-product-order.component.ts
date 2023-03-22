import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-list-product-order',
  templateUrl: './list-product-order.component.html',
  styleUrls: ['./list-product-order.component.css'],
})
export class ListProductOrderComponent implements OnInit {
  constructor(public orderService: OrderService) {}

  ngOnInit() {}

  showDetail(product) {
    product.showDetail = !product.showDetail;
  }

  remove(product) {
    this.orderService.order.removeProduct(product);
  }
}
