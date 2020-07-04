import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  
  data:any;
  constructor(private router:Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      name: string,
      time: string,
      person:string
    }
    
    this.data =[state.name,state.time , state.person]
   }


  ngOnInit() {
  }

}
