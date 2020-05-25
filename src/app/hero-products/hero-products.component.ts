import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-products',
  templateUrl: './hero-products.component.html',
  styleUrls: ['./hero-products.component.scss']
})
export class HeroProductsComponent implements OnInit {

  hero_products = [            

    {img: "../assets/images/Products/product-006-300x300.jpg" , pro_name: "Latex Balloons", class1: "fa fa-star-o", class2: "fa fa-star-o",class3: "fa fa-star-o", pro_price: "$1,500.00"},

    {img: "../assets/images/Products/product-001-300x300.jpg" , pro_name: "Decoration Accessories", class1: "fa fa-star-o", class2: "fa fa-star-o", class3: "fa fa-star-o", pro_price: "$1,800.00"},

    {img: "../assets/images/Products/product-002-300x300.jpg" , pro_name: "Decoration Accessories", class1: "fa fa-star-o", class2: "fa fa-star-o", class3: "fa fa-star-o", pro_price: "$4,800.00"},

    {img: "../assets/images/Products/product-004-300x300.jpg" , pro_name: "Decoration Accessories", class1: "fa fa-star-o", class2: "fa fa-star-o", class3: "fa fa-star-o", pro_price: "$800.00"},

            
  ]; 
  

  ngOnInit(): void {
  }

}
