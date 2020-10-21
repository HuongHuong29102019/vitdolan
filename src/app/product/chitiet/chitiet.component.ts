import { BaseComponent } from '../../lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent extends BaseComponent implements OnInit {
  item:any;
  list_item_same_type:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.item = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      let group_id=params['group_id'];
      this._api.get('/api/item/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.item = res;
        setTimeout(() => {
          this.loadScripts();
        });
      }); 
    });
    // Observable.combineLatest(
    //   this._api.get('/api/item/get-same-item'),
    // ).takeUntil(this.unsubscribe).subscribe(res => {
    //   this.list_item_same_type = res[0];
    //   setTimeout(() => {
    //     this.loadScripts();
    //   });
    // }, err => { });
  }
  addToCart(item) { 
    this._cart.addToCart(item);
    alert('Thêm thành công!'); 
  }
}