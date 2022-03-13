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
  average: number;
}

@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.css'],
})
export class ChocolateListComponent implements OnInit {
  sortedDate: sortedData[] = [];
  id: number = 0;
  constructor(private router: Router, private dataService: ChocolateService) {}

  getId(a: number) {
    this.id = a;
    // this.router.navigateByUrl('/details');
    this.router.navigate(['/details', this.id]);
    console.log(this.router.navigate(['/details', this.id]));
  }

  averagePrice(array: any) {
    return array.length > 0
      ? array.map((a: any) => a.price).reduce((b: any, c: any) => b + c) /
          array.length
      : 0;
  }

  pricePerHundredGram(array: any) {
    return array
      .map((item: any) => {
        let gram =
          item.unit == 'g' ? item.amount / 100 : (item.amount * 1000) / 100;
        return {
          ...item,
          price: item.price / gram,
        };
      })
      .sort((a: any, b: any) => a.price - b.price);
  }

  ngOnInit() {
    this.dataService.getUsers().subscribe((data) => {
      this.sortedDate = data.map((item: any) => {
        let calcPrice = this.pricePerHundredGram(item.prices);
        return {
          ...item,
          prices: [...calcPrice],
          average: this.averagePrice(calcPrice),
        };
      });
    });
    console.log(this.sortedDate);
  }
}
