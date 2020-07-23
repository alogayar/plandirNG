import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "../componentes/dataview/dataview.component";

@Injectable({
  providedIn: "root",
})
export class ComponentesService {
  brands: string[] = [
    "Audi",
    "BMW",
    "Fiat",
    "Ford",
    "Honda",
    "Jaguar",
    "Mercedes",
    "Renault",
    "Volvo",
    "VW",
  ];

  colors: string[] = [
    "Black",
    "White",
    "Red",
    "Blue",
    "Silver",
    "Green",
    "Yellow",
  ];


  constructor(private readonly _httpClient: HttpClient) {}

  public init(fichero: string) {
    return this._httpClient.get(
      `http://127.0.0.1:5500/assets/sass/source/components/_${fichero}.scss`,
      { responseType: "text" }
    );
  }

  getCars() {
    return this._httpClient
      .get<any>("assets/data/cars.json")
      .toPromise()
      .then((res) => <Car[]>res.data)
      .then((data) => {
        return data;
      });
  }
  getDependencies() {
    return this._httpClient
      .get<any>("assets/data/dependencies.json")
      .toPromise()
      .then((res) => <any[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
