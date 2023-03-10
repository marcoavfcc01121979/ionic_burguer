import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() showBack = true;

  @Output() newAccount: EventEmitter<boolean>;
  @Output() back: EventEmitter<boolean>;
  @Output() doLogin: EventEmitter<boolean>;

  public user: User;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private translate: TranslateService
  ) {
    this.newAccount = new EventEmitter<boolean>();
    this.back = new EventEmitter<boolean>();
    this.doLogin = new EventEmitter<boolean>();
    this.user = new User({});
  }

  ngOnInit() {}

  logIn() {
    this.authService
      .login(this.user.email, this.user.password)
      .then((result) => {
        console.log(result);
        this.toastService.showToast(
          this.translate.instant('label.login.success')
        );
        this.doLogin.emit(true);
      })
      .catch((error) => {
        console.log(error);
        this.toastService.showToast(
          this.translate.instant('label.login.error')
        );
      });
  }

  showNewAccount() {
    this.newAccount.emit(true);
  }

  exit() {
    this.back.emit(true);
  }
}
