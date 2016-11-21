import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { WebSocketModule } from './websocket/web-socket.module';

import {HeaderComponent}   from '../frame/index';
import {FooterComponent}   from '../frame/index';
import {LeftBarComponent}  from '../frame/index';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    WebSocketModule
  ],
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, LeftBarComponent],
  exports: [DashboardComponent, HeaderComponent, FooterComponent, LeftBarComponent]
})
export class DashboardModule { }
