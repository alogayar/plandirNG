
import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.css"],
  providers: [MessageService]
})
export class ToastComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {

  }

  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', life: 5000000000000, detail:'Via MessageService'});
}
}


