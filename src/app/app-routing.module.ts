import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KWDataService } from './kw-data.service';
import { ShopKWComponent } from './components/shop-kw/shop-kw.component';
import { ShopItemKWComponent } from './components/shop-item-kw/shop-item-kw.component';
import { ShopDetailsKWComponent } from './components/shop-details-kw/shop-details-kw.component';


const routes: Routes = [
    {
      path: '',
      component: ShopKWComponent
    },
    {
      path: '',
      component: ShopItemKWComponent
    },
    {
      path: '',
      component: ShopDetailsKWCompoent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
