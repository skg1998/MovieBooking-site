import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { BookmovieComponent } from './movie/bookmovie/bookmovie.component';
import { BookingsComponent } from './movie/bookings/bookings.component';


const routes: Routes = [
  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'bookMovie',component:BookmovieComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
