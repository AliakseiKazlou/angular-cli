import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';

import {DashboardRoutes} from './dashboard/index';
import {LoginRoutes} from './login/index';
import {PageNotFoundRoutes} from './page-not-found/index';

import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


export const routes: Routes = [
  {path: '', redirectTo: '/dashboard/home', pathMatch: 'full'},
  ...DashboardRoutes,
  ...LoginRoutes,
  ...PageNotFoundRoutes,
  {path: '**', component: PageNotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
