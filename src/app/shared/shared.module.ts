import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule.forChild()],
  declarations: [
    FooterComponent,
    ToolbarComponent,
    LoginComponent,
    CreateAccountComponent,
  ],
  exports: [
    FooterComponent,
    ToolbarComponent,
    LoginComponent,
    CreateAccountComponent,
  ],
})
export class SharedModule {}
