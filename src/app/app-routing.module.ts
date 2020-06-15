
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EstructuraComponent } from './pages/estructura/estructura.component';
import { ButtonsComponent } from './pages/componentes/buttons/buttons.component';
import { PagesModule } from './pages/pages.module';



const routes: Routes = [

  // { path: 'home', component: HomeComponent,data: {'url':'Home'}  },
  // { path: 'estructura', component: EstructuraComponent,data: {'url':'Estructura'}  },
  // { path: 'buttons', component: ButtonsComponent,data: {'url':'Buttons'}  },

  
];

export const appRoutes = RouterModule.forRoot(routes, {useHash: true})
