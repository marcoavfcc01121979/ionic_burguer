import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  public showInfoUser: boolean;
  public showNewAccount: boolean;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    public authService: AuthService
  ) {
    this.showInfoUser = false;
    this.showNewAccount = false;
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
  }

  newAccount() {
    this.showNewAccount = true;
  }

  showLogin() {
    this.showNewAccount = false;
  }
}
