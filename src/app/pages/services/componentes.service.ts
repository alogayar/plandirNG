import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  constructor(private readonly _httpClient: HttpClient) { }

  public init(fichero: string) {

    return this._httpClient.get(`http://127.0.0.1:5500/assets/sass/source/components/_${fichero}.scss`, { responseType: 'text' })

  }

}
