import { AccordionComponent } from './accordion/accordion.component';
import { TableComponent } from "./table/table.component";
import { PanelsComponent } from "./panels/panels.component";
import { MessageComponent } from "./message/message.component";
import { MenusComponent } from "./menus/menus.component";
import { ListboxComponent } from "./listbox/listbox.component";
import { DataviewComponent } from "./dataview/dataview.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { Routes, RouterModule } from "@angular/router";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./cards/cards.component";
import { InputsComponent } from "./inputs/inputs.component";
import { BreadcrumsComponent } from "./breadcrums/breadcrums.component";
import { TabsComponent } from "./tabs/tabs.component";

const componentesroutes: Routes = [
  { path: "accordion", component: AccordionComponent, data: { url: "Accordion" } },
  { path: "buttons", component: ButtonsComponent, data: { url: "Buttons" } },
  {
    path: "breadcrums",
    component: BreadcrumsComponent,
    data: { url: "Breadcrums" },
  },
  { path: "calendar", component: CalendarComponent, data: { url: "Calendar" } },
  { path: "cards", component: CardsComponent, data: { url: "Cards" } },
  { path: "dataview", component: DataviewComponent, data: { url: "Dataview" } },
  { path: "inputs", component: InputsComponent, data: { url: "Inputs" } },
  { path: "listbox", component: ListboxComponent, data: { url: "Listbox" } },
  { path: "menus", component: MenusComponent, data: { url: "Menus" } },
  { path: "message", component: MessageComponent, data: { url: "Message" } },
  { path: "panels", component: PanelsComponent, data: { url: "Panels" } },
  { path: "table", component: TableComponent, data: { url: "Table" } },
  { path: "tabs", component: TabsComponent, data: { url: "Tabs" } },
];

export const componentesRoutes = RouterModule.forRoot(componentesroutes);
