import { ROOT_REDUCERS } from './store/app.state';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthenticationLayoutComponent } from './components/layouts/authentication-layout/authentication-layout.component';
import { ErrorLayoutComponent } from './components/layouts/error-layout/error-layout.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SeasonsPageComponent } from './components/pages/seasons-page/seasons-page.component';
import { ProgressPageComponent } from './components/pages/progress-page/progress-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { VcoachPageComponent } from './components/pages/vcoach-page/vcoach-page.component';
import { MembershipPageComponent } from './components/pages/membership-page/membership-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SigninPageComponent } from './components/pages/signin-page/signin-page.component';
import { RecoveryPageComponent } from './components/pages/recovery-page/recovery-page.component';
import { TermsPageComponent } from './components/pages/terms-page/terms-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { ExecutionPageComponent } from './components/pages/execution-page/execution-page.component';
import { DashboardLayoutComponent } from './components/layouts/dashboard-layout/dashboard-layout.component';
import { MenuComponentComponent } from './components/core/menu-component/menu-component.component';

import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationLayoutComponent,
    ErrorLayoutComponent,
    HomePageComponent,
    SeasonsPageComponent,
    ProgressPageComponent,
    ProfilePageComponent,
    VcoachPageComponent,
    MembershipPageComponent,
    CheckoutPageComponent,
    LoginPageComponent,
    SigninPageComponent,
    RecoveryPageComponent,
    TermsPageComponent,
    NotFoundPageComponent,
    ExecutionPageComponent,
    DashboardLayoutComponent,
    MenuComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(ROOT_REDUCERS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
