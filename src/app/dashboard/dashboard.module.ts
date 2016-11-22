import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import {AuthorModule} from "./author/author.module";
import {PracticeModule} from "./practice/practice.module";
import {SourcesModule} from "./sources/sources.module";
import {SupervisorModule} from "./supervisor/supervisor.module";
import {TheoryModule} from "./theory/theory.module";

import {HeaderComponent}   from '../frame/index';
import {FooterComponent}   from '../frame/index';
import {LeftBarComponent}  from '../frame/index';

import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeModule,
    AuthorModule,
    PracticeModule,
    SourcesModule,
    SupervisorModule,
    TheoryModule
  ],
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, LeftBarComponent],
  exports: [DashboardComponent, HeaderComponent, FooterComponent, LeftBarComponent]
})
export class DashboardModule { }
