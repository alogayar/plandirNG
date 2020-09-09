import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inputs",
  templateUrl: "./inputs.component.html",
  styles: ["div span {display:block;margin-botom:0.5em}"],
})
export class InputsComponent implements OnInit {
  val1: string;
  val2: string;
  val3: string;
  val4: string;
  val5: string;
  val6: string;
  value1: number = 42723;
  checked: boolean;
  text: string;

  selectedCities: string[] = [];

  selectedCategories: string[] = ["Technology", "Sports"];



  constructor() {}

  ngOnInit(): void {}
}
