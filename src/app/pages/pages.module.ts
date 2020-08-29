
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentesModule } from "./componentes/componentes.module";
import { EstructuraComponent } from "./estructura/estructura.component";
import { HomeComponent } from "./home/home.component";
import { pagesRoutes } from "./pages.routes";
import { SharedModule } from "../shared/shared.module";
import { NoticiasComponent } from "./noticias/noticias.component";


import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    HomeComponent,
    EstructuraComponent,
    NoticiasComponent,
    NoticiasComponent,
  ],
  imports: [pagesRoutes, CommonModule, ComponentesModule, SharedModule],
  exports: [
    HomeComponent,
    EstructuraComponent,
    SharedModule,
    ComponentesModule,
  ],
  providers: [

    { provide: "API_URL", useValue: environment.apiUrl },
    { provide: "USUARIO", useValue: 'NOVA0011' },
  ],
})
export class PagesModule {}
