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
  menubar: MenuItem[];

  constructor() {}

  ngOnInit() {

    this.items = [{
      label: 'File',
      items: [
          {label: 'New', icon: 'pi pi-fw pi-plus'},
          {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
  },
  {
      label: 'Edit',
      items: [
          {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
      ]
  }];

    // this.items = [
    //   { label: "Presidencia", icon: "pi pi-fw pi-chevron-circle-right" },
    //   { label: "Recursos Humanos", icon: "pi pi-fw pi-chevron-circle-right" },
    //   { label: "Servicios", icon: "pi pi-fw pi-chevron-circle-right" },
    //   { label: "Gtr", icon: "pi pi-fw pi-chevron-circle-right" },
    //   { label: "Herramientas", icon: "pi pi-fw pi-chevron-circle-right" },
    //   { label: "Administración", icon: "pi pi-fw pi-chevron-circle-right" },
    //   { label: "Secretaría", icon: "pi pi-fw pi-chevron-circle-right" },
    // ];
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
    this.menubar = [
      {
        label: "File",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-plus",
            items: [{ label: "Project" }, { label: "Other" }],
          },
          { label: "Open" },
          { label: "Quit" },
        ],
      },
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          { label: "Delete", icon: "pi pi-fw pi-trash" },
          { label: "Refresh", icon: "pi pi-fw pi-refresh" },
        ],
      },
    ];
  }
}
