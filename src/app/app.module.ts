import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeroOfferComponent } from './hero-offer/hero-offer.component';
import { HeroProductsComponent } from './hero-products/hero-products.component';
import { HeroClientsfeedbackComponent } from './hero-clientsfeedback/hero-clientsfeedback.component';
import { HeroArrivalProductComponent } from './hero-arrival-product/hero-arrival-product.component';
import { HeroBlogComponent } from './hero-blog/hero-blog.component';
import { DeliveryFatherComponent } from './delivery-father/delivery-father.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BannerInnerComponent } from './banner-inner/banner-inner.component';
import { AboutPresentupComponent } from './about-presentup/about-presentup.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { GoodcommentsComponent } from './goodcomments/goodcomments.component';
import { TeamComponent } from './team/team.component'; 

// const AppComponent: AppComponent[];
 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSliderComponent,
    HeroOfferComponent,
    HeroProductsComponent,
    HeroClientsfeedbackComponent,
    HeroArrivalProductComponent,
    HeroBlogComponent,
    DeliveryFatherComponent,
    FooterComponent,
    ServiceComponent,
    AboutComponent,
    HomeComponent,    
    BannerInnerComponent, AboutPresentupComponent, OurservicesComponent, GoodcommentsComponent, TeamComponent,    
    
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
