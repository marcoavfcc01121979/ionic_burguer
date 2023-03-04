import { TranslateService } from '@ngx-translate/core';
import { Category } from './../../models/category';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public categories: Category[];
  private loading: HTMLIonLoadingElement;

  constructor(
    private productService: ProductService,
    private loadingController: LoadingController,
    private translateService: TranslateService,
    private navParams: NavParams,
    private navController: NavController
  ) {
    this.categories = [];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.presentLoading();

    this.productService.getCategories().subscribe(
      (results) => {
        this.categories = results;
        console.log(this.categories);
        this.dimissLoading();
      },
      (error) => {
        console.log(error);
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

  goToProducts(id: number) {
    this.navParams.data.idCategory = id;
    this.navController.navigateForward('list-products');
  }
}
