import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationLayoutComponent } from './components/layouts/authentication-layout/authentication-layout.component';

import { DashboardLayoutComponent } from './components/layouts/dashboard-layout/dashboard-layout.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { MembershipPageComponent } from './components/pages/membership-page/membership-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { ProgressPageComponent } from './components/pages/progress-page/progress-page.component';
import { RecoveryPageComponent } from './components/pages/recovery-page/recovery-page.component';
import { SeasonsPageComponent } from './components/pages/seasons-page/seasons-page.component';
import { SigninPageComponent } from './components/pages/signin-page/signin-page.component';
import { TermsPageComponent } from './components/pages/terms-page/terms-page.component';
import { VcoachPageComponent } from './components/pages/vcoach-page/vcoach-page.component';
import { ExecutionPageComponent } from './components/pages/execution-page/execution-page.component';
import { ErrorLayoutComponent } from './components/layouts/error-layout/error-layout.component';



const routes: Routes = [
  {
    path: '',
    component: AuthenticationLayoutComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: 'full' },
      { path: "login", component: LoginPageComponent },
      { path: "signin", component: SigninPageComponent },
      { path: "recovery", component: RecoveryPageComponent },
      { path: "terms-and-conditions", component: TermsPageComponent },
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: 'full' },
      { path: "home", component: HomePageComponent },
      { path: "seasons", component: SeasonsPageComponent },
      { path: "progress", component: ProgressPageComponent },
      { path: "profile", component: ProfilePageComponent },
      { path: "vcoach", component: VcoachPageComponent },
      {
        path: "membership", component: MembershipPageComponent,
        children: [
          {
            path: "checkout", component: CheckoutPageComponent,
          }
        ]
      },
      { path: "checkout", component: CheckoutPageComponent },
    ]
  },
  {
    path: 'error',
    component: ErrorLayoutComponent,
    children: [
      { path: "404", component: NotFoundPageComponent },
      { path: "", component: ExecutionPageComponent },
    ]
  },
  {
    path: '**', pathMatch: 'full', redirectTo: "error/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
