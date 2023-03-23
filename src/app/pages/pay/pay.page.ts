import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {
  public showNewAccount: boolean;

  constructor(
    public authService: AuthService,
    public orderService: OrderService
  ) {
    this.showNewAccount = false;
  }

  ngOnInit() {}

  newAccount() {
    this.showNewAccount = true;
  }

  back() {
    this.showNewAccount = false;
  }

  payWithPaypal() {}
}
