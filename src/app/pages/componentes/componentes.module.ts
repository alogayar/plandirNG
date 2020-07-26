import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

/* Componentes*/

import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./cards/cards.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { DataviewComponent } from "./dataview/dataview.component";
import { ListboxComponent } from "./listbox/listbox.component";
import { MessageComponent } from "./message/message.component";
import { PanelsComponent } from "./panels/panels.component";
import { TableComponent } from "./table/table.component";
import { MenusComponent } from "./menus/menus.component";
import { InputsComponent } from "./inputs/inputs.component";
import { BreadcrumsComponent } from "./breadcrums/breadcrums.component";
import { TabsComponent } from "./tabs/tabs.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { PanelComponent } from "./panel/panel.component";

/* Mdoulos */
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule } from "@angular/forms";

import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { ToastModule } from "primeng/toast";
import { CardModule } from "primeng/card";
import { InputMaskModule } from "primeng/inputmask";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { InputSwitchModule } from "primeng/inputswitch";
import { AccordionModule } from "primeng/accordion";
import { CalendarModule } from "primeng/calendar";
import { DataViewModule } from "primeng/dataview";
import { DropdownModule } from "primeng/dropdown";
import { PanelModule } from "primeng/panel";
import { DialogModule } from "primeng/dialog";
import { ListboxModule } from "primeng/listbox";
/* Servicios */
import { ComponentesService } from "../services/componentes.service";

/* Rutas */
import { componentesRoutes } from "./componentes.routes";

@NgModule({
  declarations: [
    ButtonsComponent,
    CardsComponent,
    InputsComponent,
    BreadcrumsComponent,
    TabsComponent,
    AccordionComponent,
    CalendarComponent,
    DataviewComponent,
    ListboxComponent,
    MessageComponent,
    PanelsComponent,
    TableComponent,
    MenusComponent,
    DropdownComponent,
    PanelComponent,
  ],

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
    InputSwitchModule,
    InputTextModule,
    AccordionModule,
    CalendarModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    ListboxModule,
  ],
  exports: [
    SharedModule,
    CardModule,
    DataViewModule,
    AccordionModule,
    PanelModule,
  ],
  providers: [ComponentesService],
})
export class ComponentesModule {}
