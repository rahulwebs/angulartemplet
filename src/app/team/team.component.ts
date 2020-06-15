import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  our_team = [
      {img: "assets/images/team/team-img-1.jpg", employee_name: "Lenalee Crus", emloyee_position: "Graphic Designer"},
      {img: "assets/images/team/team-img-2.jpg", employee_name: "Diana Aiden", emloyee_position: "Wedding Planner"},
      {img: "assets/images/team/team-img-3.jpg", employee_name: "Rahul Developer", emloyee_position: "Wedding Planner"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
