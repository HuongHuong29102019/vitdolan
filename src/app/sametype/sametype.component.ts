import { Component, OnInit, AfterViewInit, Renderer2, Injector } from '@angular/core';
import { BaseComponent } from './../lib/base-component';
import { Observable, timer } from 'rxjs';
import { ApiService } from '../lib/api.service';
@Component({
  selector: 'app-sametype',
  templateUrl: './sametype.component.html',
  styleUrls: ['./sametype.component.css']
})
export class SametypeComponent extends BaseComponent implements OnInit{

  list__same_item:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('/api/item/get-same-item'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list__same_item = res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
  }

}
