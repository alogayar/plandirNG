import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/api";

interface Municipio {
  id:number;
  name: string;
  code: string;
  label:string;
}

@Component({
  selector: "app-listbox",
  templateUrl: "./listbox.component.html",
  styleUrls: ["./listbox.component.css"],
})
export class ListboxComponent implements OnInit {

  municipios: SelectItem[];
  seleccionaMuni: Municipio;

   //SelectItem API with label-value pairs




  constructor() {
    this.municipios = [

      { label: "Albanchez de Magina", value: { id: 1, name: "Albanchez de Magina", code: "1" } },
      { label: "Alcala la Real", value: { id: 2, name: "Alcala la Real", code: "2" } },
      { label: "Alcaudete", value: { id: 3, name: "Alcaudete", code: "3" } },
      { label: "Aldeaquemada", value: { id: 4, name: "Aldeaquemada", code: "4" } },
      { label: "Andujar", value: { id: 5, name: "Andujar", code: "5" } },

    ];
  }

  ngOnInit() {}
}
