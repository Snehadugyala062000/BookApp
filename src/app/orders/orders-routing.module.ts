import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOrdersComponent } from '../list-orders/list-orders.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';

const routes: Routes = [
  {path:'myorders', component:MyOrdersComponent},  
  {path:'orders', component:ListOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }