import { Component } from '@angular/core';
import { Globalization } from '@ionic-native/globalization/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private globalization: Globalization,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
  }

  getLanguage() {
    this.globalization
      .getPreferredLanguage()
      .then((res) => {
        if (res) {
          if (res.value.includes('.')) {
            this.translate.use(res.value.split('.')[0]);
          } else {
            this.translate.use(res.value);
          }
        }
      })
      .catch((e) => console.error(e));
  }
}
