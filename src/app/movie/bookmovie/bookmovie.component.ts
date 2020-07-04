import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import {AuthServiceService}  from '../../auth/auth-service.service';

@Component({
  selector: 'app-bookmovie',
  templateUrl: './bookmovie.component.html',
  styleUrls: ['./bookmovie.component.css']
})
export class BookmovieComponent implements OnInit {

  bookingModel:FormGroup;
  submitted=false;
  movieTime = [];

  movies:any = [
    {name:"Shawshank Redemption",time:["10.00","11.00","13.00","17.00","20.00"]},
    {name:"Batman vs Superman",time:["10.00","11.00","13.00"]},
    {name:"Avengers Endgame",time:["10.00","11.00","13.00","15.00"]},
    {name:"Harry Potter",time:["7.00","12.00","14.00","18.00"]},
    { name:"Aquaman" ,time:["12:00", "14:00"]}
  ]

  filterMovieTime(e) {

    let movieName = e.target.value;
    this.movies.forEach(movie => {
      if(movie.name == movieName) this.movieTime = movie.time;
    });
    
  }

  constructor(private fb : FormBuilder , private authService : AuthServiceService ) { }


  ngOnInit() {

    this.bookingModel = this.fb.group({
        name:['',Validators.required],
        time:['',Validators.required],
        person:['',Validators.required]
    })
  }

  get f() { 
    return this.bookingModel.controls;
   }

   booking(){
    this.submitted = true;
    if(this.bookingModel.invalid){
      return 
    }else{
      this.authService.booking(this.bookingModel.value);
    }
   } 

}
