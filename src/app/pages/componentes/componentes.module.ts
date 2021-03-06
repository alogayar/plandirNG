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
import { FieldsetComponent } from "./fieldset/fieldset.component";
import { ToastComponent } from "./toast/toast.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { PaginatorComponent } from "./paginator/paginator.component";

/* Mdoulos */
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule } from "@angular/forms";

import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
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
import { MenuModule } from "primeng/menu";
import { MessagesModule } from "primeng/messages";
import { FieldsetModule } from "primeng/fieldset";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";
import { ContextMenuModule } from "primeng/contextmenu";
import { ToastModule } from "primeng/toast";
import { CheckboxModule } from "primeng/checkbox";
import { PaginatorModule } from "primeng/paginator";

/* Servicios */
import { ComponentesService } from "../services/componentes.service";

/* Rutas */
import { componentesRoutes } from "./componentes.routes";
import { DialogComponent } from './dialog/dialog.component';

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
    FieldsetComponent,
    ToastComponent,
    SpinnerComponent,
    PaginatorComponent,
    DialogComponent,
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
    MenuModule,
    MessagesModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    ContextMenuModule,
    CheckboxModule,
    PaginatorModule
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
