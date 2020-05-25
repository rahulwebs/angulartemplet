import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
// export class HeroSliderComponent implements OnInit {
 
    export class HeroSliderComponent {  
      banner_slides = [            

        { bg_img: "../assets/images/mainslider-image-2.jpg" , caption1: "Big", class: "first" , caption2: "Celebration", caption3: "sale", caption4: "50% OFF", button: "Buy Now!"},

        { bg_img: "../assets/images/mainslider-image-1.jpg" , caption1: "Buy One Get One Freee! ", class:"second",caption2: "HALF",caption3: " PRICE ", caption4:"On Selected Products", button: "Shop Now!", class_icon: "fa fa-angle-right", right_img: "right_img", img: "../assets/images/cake-shop-img01.png", offer_img: "./assets/images/sale-icon.png"},         
      ]; 
      
      
      slideConfig = {  
        "slidesToShow": 1,  
        "slidesToScroll": 1,  
        "dots": true,    
        "enabled": true,
        "autoplay": true,
        "draggable": false, 
        "loop":true,      
        "method": {},              
        "infinite": true,   
        "autoplaySpeed": 3000,
        "nextArrow": '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
        "prevArrow": '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>', 
      }
      
      
    }  