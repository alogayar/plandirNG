import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from './componentes/componentes.module';
import { EstructuraComponent } from './estructura/estructura.component';
import { HomeComponent } from './home/home.component';
import { pagesRoutes } from './pages.routes';
import { SharedModule } from '../shared/shared.module';








@NgModule({
  declarations: [
    HomeComponent,
    EstructuraComponent,


  ],
  imports: [

    pagesRoutes,
    CommonModule,
    ComponentesModule,
    SharedModule,


  ],
  exports:[
    HomeComponent,
    EstructuraComponent,
    SharedModule,
    ComponentesModule,


  ]
})
export class PagesModule { }
