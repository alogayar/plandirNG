import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';

const componentesroutes: Routes = [

    { path: 'buttons', component: ButtonsComponent, data: { 'url': 'Buttons' } }, 
    { path: 'cards', component: CardsComponent, data: { 'url': 'Cards' } }, 

]

export const componentesRoutes = RouterModule.forRoot(componentesroutes);