import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { FrameModule } from './frame/frame.module';

import './rxjs-extensions';

import {AppRoutingModule}     from './app.routes';

import {AppComponent}   from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DashboardModule,
    LoginModule,
    PageNotFoundModule,
    FrameModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
