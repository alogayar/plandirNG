import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SectionHeaderComponent } from './content/section-header/section-header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SectionHtmlComponent } from './content/section-html/section-html.component';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    SectionHeaderComponent, 
    SectionHtmlComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CardModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    SectionHeaderComponent,
    SectionHtmlComponent

  ]
})
export class SharedModule { }
