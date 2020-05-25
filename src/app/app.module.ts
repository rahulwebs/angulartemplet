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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
