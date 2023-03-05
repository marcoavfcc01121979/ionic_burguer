import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  public product: Product;

  constructor(
    private navParams: NavParams,
    private orderService: OrderService,
    private toastService: ToastService,
    private translate: TranslateService,
    private navCtrl: NavController
  ) {
    this.product = this.navParams.data.product;
    console.log(this.product);
  }

  ngOnInit() {}

  addProductOrder() {
    const product: Product = new Product(this.product);

    this.orderService.order.addProduct(product);
    console.log(this.orderService.order);

    this.toastService.showToast(
      this.translate.instant('label.product.add.success')
    );

    this.navCtrl.navigateRoot('/');
  }
}
