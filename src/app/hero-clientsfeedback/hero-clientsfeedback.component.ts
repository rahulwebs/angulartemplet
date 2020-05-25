import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-clientsfeedback',
  templateUrl: './hero-clientsfeedback.component.html',
  styleUrls: ['./hero-clientsfeedback.component.scss']
})
export class HeroClientsfeedbackComponent implements OnInit {

  clientsfeedback_slider = [            

    
    {clientfeedback: "I would recommend her for any event weddings, anniversary party, baby shower, birthday parties and more THANK YOU!!!!!!!!!!!!!",slide_img:"assets/images/testiamonial/img1.jpg"},

    {clientfeedback: "rahul er for any event weddings, anniversary party, baby shower, birthday parties and more THANK YOU!!!!!!!!!!!!!",slide_img:"assets/images/testiamonial/img2.jpg"},

    {clientfeedback: "I would recommend her for any event weddings, anniversary party, baby shower, birthday parties and more THANK YOU!!!!!!!!!!!!!",slide_img:"assets/images/testiamonial/img3.jpg"},   
    
    {clientfeedback: "rahul er for any event weddings, anniversary party, baby shower, birthday parties and more THANK YOU!!!!!!!!!!!!!",slide_img:"assets/images/testiamonial/img2.jpg"},

    {clientfeedback: "rahul er for any event weddings, anniversary party, baby shower, birthday parties and more THANK YOU!!!!!!!!!!!!!",slide_img:"assets/images/testiamonial/img2.jpg"},
  ]; 


   
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,    
    "enabled": true,    
    "autoplay": true,
    "draggable": false, 
    "loop":true,                      
    "infinite": true,   
    "autoplaySpeed": 3000,
    "asNavFor": ".thums",
    "nextArrow": false,
    "prevArrow": false, 
  }
  slideConfig_secund = {  
    "slidesToShow": 4,  
    "slidesToScroll": 4,  
    "dots": true,    
    "enabled": true,
    "autoplay": true,    
    "draggable": false, 
    "loop":true,                        
    "infinite": true,   
    "autoplaySpeed": 3000,
    "asNavFor": ".testiamonial_slider",
    "nextArrow": '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fa fa-angle-right"></i></div>',
    "prevArrow": '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',     
    "centerMode": true,
  "centerPadding": '10px',
  responsive: [
    {
      "breakpoint": 768,
      "settings": {
        "arrows": false,
        "centerMode": true,
        "centerPadding": '10px',
        "slidesToShow": 3
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "arrows": false,
        "centerMode": true,
        "centerPadding": '0px',
        "slidesToShow": 1
      }
    }
  ]
    
  }


  ngOnInit(): void {
  }

}
