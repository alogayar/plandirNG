import { RouterModule, Routes } from '@angular/router';
import { EstructuraComponent } from './estructura/estructura.component';
import { HomeComponent } from './home/home.component';


const pagesroutes: Routes = [
    { path: 'home', component: HomeComponent,data: {'url':'Get Started'}  },
    { path: 'estructura', component: EstructuraComponent,data: {'url':'Estructura'}  },    
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
]

export const pagesRoutes = RouterModule.forRoot(pagesroutes);