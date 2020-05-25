import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-blog',
  templateUrl: './hero-blog.component.html',
  styleUrls: ['./hero-blog.component.scss']
})
export class HeroBlogComponent implements OnInit {

  old_blog = [            

    {img: "assets/images/blog/img1.jpg" , date: "1", month: "OCT", blog_title: "Best Kids’ Birthday Party Ideas"},

    {img: "assets/images/blog/img2.jpg" , date: "20", month: "SEP", blog_title: "Best Kids’ Birthday Party Ideas"},
            
  ]; 
 

  letest_blog = [            

    {img: "assets/images/blog/img3.jpg" , date: "1", month: "OCT", blog_title: "Best Kids’ Birthday Party Ideas"},    
            
  ]; 

  ngOnInit(): void {
  }

}
