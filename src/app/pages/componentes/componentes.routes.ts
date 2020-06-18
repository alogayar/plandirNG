import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { InputsComponent } from './inputs/inputs.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { TabsComponent } from './tabs/tabs.component';

const componentesroutes: Routes = [

    { path: 'buttons', component: ButtonsComponent, data: { 'url': 'Buttons' } }, 
    { path: 'cards', component: CardsComponent, data: { 'url': 'Cards' } }, 
    { path: 'breadcrums', component: BreadcrumsComponent, data: { 'url': 'Breadcrums' } }, 
    { path: 'tabs', component: TabsComponent, data: { 'url': 'Tabs' } }, 
    { path: 'inputs', component: InputsComponent, data: { 'url': 'Inputs' } }, 


]

export const componentesRoutes = RouterModule.forRoot(componentesroutes);
