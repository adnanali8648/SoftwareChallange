import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import{ChocolateListComponent} from '../chocolate-list/chocolate-list.component';
import {Nutrition,Chocolate, ChocolateService,Price } from '../chocolate.service';
import { ActivatedRoute } from '@angular/router';

// interface sortedData {
//   id: number;
//   name: string;
//   brand: string;
//   currency: string;
//   prices: Price[];
//   nutrition: Nutrition;

// }

@Component({
  selector: 'app-chocolate-detail',
  templateUrl: './chocolate-detail.component.html',
  styleUrls: ['./chocolate-detail.component.css']
})


export class ChocolateDetailComponent implements OnInit {
  displayedColumns: string[] = ['position', 'prices', 'amount', 'shopLink'];
  // dataSource = ELEMENT_DATA;

  sortedDate: Chocolate[]=[]; 
  dataSource :Chocolate={};
  DetailById :Price[][]=[];

  constructor(private route: ActivatedRoute,private dataService: ChocolateService) { }

  ngOnInit(): void {

 //console.log  ( this.route.snapshot.params['id']);
 this.dataService.getUsers().subscribe(data =>{

  let dataById = data.filter(y => {return y.id==this.route.snapshot.params['id']});
  this.dataSource = Object.assign({}, ...dataById ) 
  // this.DetailById=this.dataSource.map(y=>y.prices)
  console.log(dataById,'object')


 })
    
  }

}
