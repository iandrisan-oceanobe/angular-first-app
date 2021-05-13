import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppPasswordMatch } from './directives/app-password-match/app-password-match.directive';
import { AppPhoneNumberValidDirective } from './directives/app-phone-number-valid/app-phone-number-valid.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundPageComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AppPhoneNumberValidDirective,
    AppPasswordMatch,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
