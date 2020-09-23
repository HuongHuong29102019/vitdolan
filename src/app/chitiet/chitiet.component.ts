import { BaseComponent } from './../lib/base-component';
import { Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit, Renderer2, Injector } from '@angular/core';
import { ApiService } from '../lib/api.service';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent extends BaseComponent implements OnInit, AfterViewInit {
  item:any;
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.item = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/item/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.item = res;
      }); 
    });

  }
  ngAfterViewInit() { 
    this.loadScripts();
    window.scroll(0,0);
  }
}
