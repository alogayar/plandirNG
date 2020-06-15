import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectionHeaderComponent } from "./content/section-header/section-header.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { SectionHtmlComponent } from "./content/section-html/section-html.component";
import { CardModule } from "primeng/card";
import { CodeHighlighterModule } from "primeng/codehighlighter";
import { TabViewModule } from "primeng/tabview";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    SectionHeaderComponent,
    SectionHtmlComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    CardModule,
    CodeHighlighterModule,
    TabViewModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    SectionHeaderComponent,
    SectionHtmlComponent,
  ],
})
export class SharedModule {}
