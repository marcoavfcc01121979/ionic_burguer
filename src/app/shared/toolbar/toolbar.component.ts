import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  public showInfoUser: boolean;
  public showNewAccount: boolean;
  public showOrder: boolean;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    public authService: AuthService,
    private menuController: MenuController,
    public orderService: OrderService
  ) {
    this.showInfoUser = false;
    this.showNewAccount = false;
    this.showOrder = false;
  }

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

  showPanelUser() {
    this.showInfoUser = true;
  }

  logout() {
    this.authService.logout();
  }

  back() {
    this.showInfoUser = false;
    this.showNewAccount = false;
    this.showOrder = false;
  }

  newAccount() {
    this.showNewAccount = true;
  }

  showLogin() {
    this.showNewAccount = false;
  }

  showPanelOrder() {
    this.showOrder = true;
  }

  goToPay() {
    this.back();

    this.menuController.close('content');
    this.navCtrl.navigateForward('pay');
  }
}
