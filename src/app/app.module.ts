import { NgModule, OnInit } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayDealComponent } from './home-Page/day-deal/day-deal.component';
import { FarmsExploreComponent } from './home-Page/farms-explore/farms-explore.component';
import { PromosFeaturedComponent } from './home-Page/promos-featured/promos-featured.component';
import { FreshesComponent } from './home-Page/freshes/freshes.component';
import { CategoriesTopComponent } from './home-Page/categories-top/categories-top.component';
import { YogHurtComponent } from './home-Page/yog-hurt/yog-hurt.component';
import { FooterPathComponent } from './layout-content/footer-path/footer-path.component';
import { HeaderPathComponent } from './layout-content/header-path/header-path.component';

@NgModule({
  declarations: [
    AppComponent,
    DayDealComponent,
    FarmsExploreComponent,
    PromosFeaturedComponent,
    FreshesComponent,
    CategoriesTopComponent,
    YogHurtComponent,
    FooterPathComponent,
    HeaderPathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
 