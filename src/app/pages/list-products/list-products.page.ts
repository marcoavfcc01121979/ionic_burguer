import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.page.html',
  styleUrls: ['./list-products.page.scss'],
})
export class ListProductsPage implements OnInit {
  public products: Product[];
  private idCategory: number;
  private loading: HTMLIonLoadingElement;

  constructor(
    private navParams: NavParams,
    private productService: ProductService,
    private loadingController: LoadingController,
    private translateService: TranslateService,
    private navController: NavController
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.idCategory = this.navParams.data.idCategory;
    console.log(this.idCategory);
    this.products = [];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.presentLoading();

    this.productService.getProducts(this.idCategory).subscribe(
      (results) => {
        this.products = results;
        console.log(this.products);
        this.dimissLoading();
      },
      (error) => {
        this.dimissLoading();
      }
    );
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: this.translateService.instant('label.loading'),
    });
    await this.loading.present();
  }

  async dimissLoading() {
    if (this.loading != null) {
      await this.loading.dismiss();
    }
  }

  goToProduct(p: Product) {
    this.navParams.data.product = p;
    this.navController.navigateForward('product');
  }
}
