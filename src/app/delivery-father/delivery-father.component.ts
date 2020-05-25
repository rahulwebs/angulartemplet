import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-father',
  templateUrl: './delivery-father.component.html',
  styleUrls: ['./delivery-father.component.scss']
})
export class DeliveryFatherComponent implements OnInit {

  delivery_fa = [            

    {icon_delivery: "fa fa-truck", deliverfeatures:"HOME DELEVERY", deliverfeatures_p:"We deleiver right to your doorstep"}, 

    {icon_delivery: "fa fa-gift", deliverfeatures:"BUY ONE GET 2", deliverfeatures_p:"We offer only the best deal"}, 

    {icon_delivery: "fa fa-sun-o", deliverfeatures:"HUGE DISCOUNTS", deliverfeatures_p:"We offer only the best deal"},      
  ]; 

  ngOnInit(): void {
  }

}
