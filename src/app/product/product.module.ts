import { ListComponent } from './list/list.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  {
    path: 'chitiet/:id',
    component: ChitietComponent,
  },
  {
    path: 'list/:id',
    component: ListComponent,
  },
  {
    path: 'search/:tk',
    component: SearchComponent,
  },
];  
@NgModule({
  declarations: [ChitietComponent,ListComponent, SearchComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductModule { }