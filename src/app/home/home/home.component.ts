import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  movies:any =[
    {imgUrl:'https://www.tampasdowntown.com/wp-content/uploads/2019/08/Shawshank.Redemption_Poster.png',name:"Shawshank Redemption"},
    {imgUrl:'https://image.cnbcfm.com/api/v1/image/102597285-Batman-vs-Superman.jpeg?v=1429289110&w=1600&h=900',name:"Batman vs Superman"},
    {imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIUorxSL3XVuW7t_kRvh6iC_NrMud7GQRibbPop4I0uTra_7u&s',name:"Avengers Endgame"},
    {imgUrl:'https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',name:"Harry Potter"},
    {imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCjiS4EQDAF96e80yLI7oyPFjJO-nTdjX5iVoOaFnm7h5ujAG&s',name:" Aquaman"}
 ]

  constructor() { }

  ngOnInit() {
  }

}
