import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonModule } from "primeng/button";
import { ButtonsComponent } from "./buttons/buttons.component";
import { TabViewModule } from "primeng/tabview";
import { SharedModule } from "src/app/shared/shared.module";
import { ToastModule } from "primeng/toast";
import { ComponentesService } from "../services/componentes.service";
import { HttpClientModule } from "@angular/common/http";
import { componentesRoutes } from "./componentes.routes";
import { CardModule } from "primeng/card";
import { CardsComponent } from "./cards/cards.component";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { InputsComponent } from "./inputs/inputs.component";
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [ButtonsComponent, CardsComponent, InputsComponent, BreadcrumsComponent, TabsComponent],

  imports: [
    CommonModule,
    componentesRoutes,
    HttpClientModule,
    ButtonModule,
    SharedModule,
    TabViewModule,
    ToastModule,
    CardModule,
    BreadcrumbModule,
    InputMaskModule,
    FormsModule,
    InputNumberModule,    
    InputSwitchModule


  ],
  exports: [SharedModule, CardModule],
  providers: [ComponentesService],
})
export class ComponentesModule { }
