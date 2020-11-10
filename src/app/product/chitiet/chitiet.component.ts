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
    let id='';
    this._route.params.subscribe(params => {
      id = params['id'];
    });
    this.getByID(id);
  }
  getByID(id){
    this._api.get('/api/item/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
    this.item = res;
    this.getByCategory(res.item_group_id)      
    setTimeout(() => {
        this.loadScripts();
      });
    });
  }
  getByCategory(id){
    this._api.get('/api/item/get-same-item/'+id).takeUntil(this.unsubscribe).subscribe(res => {
    this.list_item_same_type = res;
    setTimeout(() => {
        this.loadScripts();
      });
    }); 
  }
  swish(it)
  {
    this._api.get('/api/item/get-by-id-swish/'+ it.item_id).takeUntil(this.unsubscribe).subscribe((res:any) => {
      alert('Đã thích sản phẩm !'); 
      }); 
  }
  addToCart(item) { 
    this._cart.addToCart(item);
    alert('Thêm thành công!'); 
  }
}