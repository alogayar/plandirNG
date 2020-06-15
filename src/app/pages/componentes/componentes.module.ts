import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ButtonModule } from 'primeng/button';
import { ButtonsComponent } from './buttons/buttons.component';
import { TabViewModule } from 'primeng/tabview';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { ComponentesService } from '../services/componentes.service';
import { HttpClientModule } from '@angular/common/http';
import { componentesRoutes } from './componentes.routes';
import { CardModule } from 'primeng/card';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    CardsComponent],
  imports: [
    CommonModule,
    componentesRoutes,
    HttpClientModule,
    ButtonModule,
    SharedModule,
    TabViewModule,
    ToastModule,
    CardModule


  ],
  exports: [
    SharedModule,
    CardModule

  ],
  providers: [
    ComponentesService
  ]
})
export class ComponentesModule { }
