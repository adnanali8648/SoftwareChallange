import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Chocolate, ChocolateService, Price } from '../chocolate.service';
import { Router } from '@angular/router'; 


 interface sortedData {
  id: number;
  name: string;
  brand: string;
  currency: string;
  prices: Price[];
  average:number;
}


@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.css']
})


export class ChocolateListComponent implements OnInit {

  sortedDate: sortedData[]=[];
  id:number=0;
  constructor(private router: Router,private dataService: ChocolateService) { 
    
  }

  getId(a:number){
    this.id=a;
    // this.router.navigateByUrl('/details');
    this.router.navigate(['/details',this.id]); 
    console.log(this.router.navigate(['/details',this.id]))
  }


  averagePrice(array:any) {  return array.map((a:any) => a.price).reduce((b:any,c:any)=> b+c)  / array.length }
  sortPrice(array:any) {return array.sort((a:any, b:any) =>a.price-b.price); }
  ngOnInit() {
    
     this.dataService.getUsers().subscribe(data=>{
     this.sortedDate = data.map((item:any) => (
      {
        ...item,
        prices: this.sortPrice(item.prices), //item.prices.sort((a:any,b:any) =>(a.price-b.price)),
        average : this.averagePrice(item.prices) //item.prices.map((a:any) => a.price).reduce((b:any,c:any)=> b+c)  / item.prices.length 
      }
    ))  
    });
  }
}
