import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-menus",
  templateUrl: "./menus.component.html",
  styleUrls: ["./menus.component.css"],
})
export class MenusComponent implements OnInit {
  items: MenuItem[];
  subitems: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      { label: "Presidencia", icon: "pi pi-fw pi-chevron-circle-right" },
      { label: "Recursos Humanos", icon: "pi pi-fw pi-chevron-circle-right" },
      { label: "Servicios", icon: "pi pi-fw pi-chevron-circle-right" },
      { label: "Gtr", icon: "pi pi-fw pi-chevron-circle-right" },
      { label: "Herramientas", icon: "pi pi-fw pi-chevron-circle-right" },
      { label: "Administración", icon: "pi pi-fw pi-chevron-circle-right" },
      { label: "Secretaría", icon: "pi pi-fw pi-chevron-circle-right" },
    ];
    this.subitems = [
      {
        label: "Presidencia",
        items: [
          {
            label: "Mantenimiento de Inversiones",
            icon: "pi pi-fw pi-arrow-circle-right",
          },
        ],
      },
      {
        label: "Recursos Humanos",
        items: [
          {
            label: "Gestión de Convocatorias",
            icon: "pi pi-fw pi-user-plus",
          },
        ],
      },
      {
        label: "Gtr",
        items: [
          {
            label: "Informes",
            icon: "pi pi-fw pi-file-o",
          },
        ],
      },
    ];
  }
}
