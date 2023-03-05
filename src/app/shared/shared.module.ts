import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule.forChild()],
  declarations: [FooterComponent, ToolbarComponent, LoginComponent],
  exports: [FooterComponent, ToolbarComponent, LoginComponent],
})
export class SharedModule {}
