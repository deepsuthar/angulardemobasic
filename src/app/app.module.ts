import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { ChangeTextDirective } from './change-text.directive';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { BannerCompComponent } from './banner-comp/banner-comp.component';
import { PackageCompComponent } from './package-comp/package-comp.component';
import { AboutCompComponent } from './about-comp/about-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    ChangeTextDirective,
    FooterCompComponent,
    BannerCompComponent,
    PackageCompComponent,
    AboutCompComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BsDropdownModule.forRoot(), TooltipModule.forRoot(), ModalModule.forRoot(),
    RouterModule.forRoot([
      {
         path: 'new-cmp',
         component: HeaderCompComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
