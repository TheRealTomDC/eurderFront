import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {CreateItemComponent} from './create-item/create-item.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';

const routes: Routes = [
  {path: 'items', component: ItemsComponent},
  {path: 'createNewItem', component: CreateItemComponent},
  {path: 'itemDetail', component: ItemDetailComponent},
  {path: '', redirectTo: 'items', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
