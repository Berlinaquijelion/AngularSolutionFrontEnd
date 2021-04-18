import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [NavBarComponent, NotFoundComponent],
  imports: [
    CommonModule,RouterModule
  ] ,
  // agregamos propiedad export debido que el componente NavBarComponent
  // es compartido y toda la app debe saber sobre ese componente
  exports:[
    NavBarComponent,NotFoundComponent
  ]
})
export class SharedModule { }
