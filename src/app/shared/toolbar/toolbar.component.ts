import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) {}

  ngOnInit() {}

  showBackButton() {
    const urlNoButton = ['/categories', '/pay'];

    if (urlNoButton.find((url) => url === this.router.url)) {
      return false;
    }
    return true;
  }

  goBack() {
    this.navCtrl.back();
  }
}
