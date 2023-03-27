import { PayPal } from '@ionic-native/paypal/ngx';
import { Component, OnInit } from '@angular/core';
import { PayPalConfiguration, PayPalPayment } from '@ionic-native/paypal';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

import { UserService } from 'src/app/services/user.service';
import { ToastService } from 'src/app/services/toast.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {
  public showNewAccount: boolean;

  constructor(
    public authService: AuthService,
    public orderService: OrderService,
    private paypal: PayPal,
    private userService: UserService,
    private toastService: ToastService,
    private translate: TranslateService
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

  createOrder() {
    this.orderService
      .createOrder()
      .then((data) => {
        console.log('Se ha creado el objeto ', data);
        this.toastService.showToast(
          this.translate.instant('label.pay.success', {
            address: this.orderService.order.address,
          })
        );
        this.orderService.clearOrder();
      })
      .catch((e) => {
        console.error('Ha habido um error ' + e);
        this.toastService.showToast(this.translate.instant('label.pay.fail'));
      });
  }

  payWithPaypal() {
    this.paypal
      .init({
        PayPalEnvironmentProduction: '',
        PayPalEnvironmentSandbox:
          'AUb8cUzYwNX2nqgaFIBGSreJVd5vD2TnSGzuELSCcYIZNEnTnoE3bgiPnXzbuvhaCzjDFyz0fKTolD3g',
      })
      .then(() => {
        this.paypal
          .prepareToRender(
            'PayPalEnvironmentSandbox',
            new PayPalConfiguration({})
          )
          .then(() => {
            const payment = new PayPalPayment(
              this.orderService.totalOrder(),
              'BR',
              'Burguer queen',
              'sale'
            );
            this.paypal.renderSinglePaymentUI(payment).then(
              () => {
                this.authService.currentUser().then((user) => {
                  this.userService
                    .getAddressUser(user.email)
                    .subscribe((users) => {
                      console.log(users[0].address);
                      this.orderService.order.address = users[0].address;
                      this.createOrder();
                    });
                });
              },
              () => {}
            );
          });
      })
      .catch((err) => {});
  }
}
