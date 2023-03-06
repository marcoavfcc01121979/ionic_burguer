import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  @Output() back: EventEmitter<boolean>;
  @Output() doCreateAccount: EventEmitter<boolean>;

  public user: User;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private translate: TranslateService
  ) {
    this.user = new User({});
    this.back = new EventEmitter<boolean>();
    this.doCreateAccount = new EventEmitter<boolean>();
  }

  ngOnInit() {}

  createAccount() {
    this.authService
      .createAccount(this.user.email, this.user.password)
      .then((result) => {
        console.log(result);
        this.doCreateAccount.emit(true);
        this.toastService.showToast(
          this.translate.instant('label.create.account.success')
        );
      })
      .catch((error) => {
        console.log(error);
        this.toastService.showToast(
          this.translate.instant('label.create.account.error')
        );
      });
  }

  exit() {
    this.back.emit(true);
  }
}
