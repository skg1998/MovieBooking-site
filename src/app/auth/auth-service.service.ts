import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router:Router) { }

  booking(value){
  let data:NavigationExtras  = {
    state: { "name":value.name,
      "time":value.time,
      "person":value.person
    }
   }
   return  this.router.navigate(['/bookings'] ,data);

  }


}
