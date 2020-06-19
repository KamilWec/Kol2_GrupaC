import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KWDataService } from './kw-data.service';
import {HttpClientModule} from '@angular/common/http';
import { ShopKWComponent } from './components/shop-kw/shop-kw.component';
import { ShopItemKWComponent } from './components/shop-item-kw/shop-item-kw.component';
import { ShopDetailsKWComponent } from './components/shop-details-kw/shop-details-kw.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopKWComponent,
    ShopItemKWComponent,
    ShopDetailsKWComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [KWDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
