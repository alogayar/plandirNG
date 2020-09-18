import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';

/* Moduls */
import { PagesModule } from './pages/pages.module';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutes,
    PagesModule,


  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
