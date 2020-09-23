import { BaseComponent } from './../lib/base-component';
import { Component, OnInit, AfterViewInit, Renderer2, Injector } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { ApiService } from '../lib/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit, AfterViewInit {
  list_item:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('/api/item/get-all'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item = res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
  }
  ngAfterViewInit() { 
    setTimeout(() => {
      this.loadScripts();
    }); 
  }
  

}
