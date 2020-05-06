import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { ItemsHeaderComponent } from './items-header/items-header.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateItemComponent } from './create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HeaderComponent,
    FilterPipe,
    ItemsHeaderComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
