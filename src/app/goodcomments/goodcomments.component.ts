import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goodcomments',
  templateUrl: './goodcomments.component.html',
  styleUrls: ['./goodcomments.component.scss']
})
export class GoodcommentsComponent implements OnInit {

  countup = [            

    { icon: "fa fa-lightbulb-o" , counter_n: "8080", title: "GOOD COMMENTS"},
    { icon: "fa fa-file", counter_n: "8080", title: "GOOD COMMENTS"}, 
    { icon: "fa fa-frown-o", counter_n: "8080", title: "GOOD COMMENTS"},  
    { icon: "fa fa-frown-o", counter_n: "8080", title: "GOOD COMMENTS"},                
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
