import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-offer',
  templateUrl: './hero-offer.component.html',
  styleUrls: ['./hero-offer.component.scss']
})
export class HeroOfferComponent implements OnInit {

  offer_img_first = "../assets/images/offer_images/offer_1.jpg";

  offer_img_second = "../assets/images/offer_images/banner-two.jpg";

  offer_img_third = "../assets/images/offer_images/offer_3.jpg";

  offer_img_fourth = "../assets/images/offer_images/offer_4.jpg";
  

  ngOnInit(): void {
  }

}
