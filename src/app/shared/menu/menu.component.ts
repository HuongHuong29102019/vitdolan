import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from '../../lib/base-component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {
  menus:any;
  total:any;
  items:any;
  money:any;
  constructor( injector: Injector,private _rou: Router) {
    super(injector);
  }
  ngOnInit(): void {
    this._api.get('/api/itemgroup/get-menu').takeUntil(this.unsubscribe).subscribe(res => {
      this.menus = res;
    }); 
    this._cart.items.subscribe((res) => {
      this.total = res? res.length:0;
    });
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.money = 0;
      for(let x of this.items){ 
        x.moneysum = x.quantity * x.item_price;
        this.money += x.quantity * x.item_price;
      } 
    });
  }
  search(timkiem){
    this._rou.navigate(["/product/search",timkiem]);
  }
}
