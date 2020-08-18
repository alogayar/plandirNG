import { Component, OnInit } from "@angular/core";
import { Message } from "primeng/api";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"],
})
export class MessageComponent implements OnInit {
  msgsuccess: Message[] = [];
  msgwarn: Message[] = [];
  msginfo: Message[] = [];
  msgerror: Message[] = [];

  constructor() {}

  ngOnInit() {
    this.msgsuccess.push({
      severity: "success",
      summary: "Operacion Realizada con Éxito",
      detail: "Alta Expediente",
    });
    this.msgwarn.push({
      severity: "warn",
      summary: "Faltan campos por rellenar en el formulario",
      //detail: "El campo Dni no puede estar vacio",
    });
    this.msgerror.push({
      severity: "error",
      summary: "Error al dar de alta el Expediente",
      detail: "Ya existe el Expediente",
    });
    this.msginfo.push({
      severity: "info",
      summary: "Mensaje de Informacion",
      detail: "Usuario NOVA0011",
    });
  }
}
