import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes,RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';


// configurar ruteo

const customerRoutes: Routes = [
  {
    path: '',
    children:
    [
      {
        path:'',
        component:CustomerListComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(customerRoutes),
    CommonModule
  ]
  ,
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule { }
