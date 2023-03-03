import { Category } from './../../models/category';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public categories: Category[];

  constructor(private productService: ProductService) {
    this.categories = [];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.productService.getCategories().subscribe((results) => {
      this.categories = results;
      console.log(this.categories);
    });
  }
}
