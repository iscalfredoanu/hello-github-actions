import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

private API_URL="https://rickandmortyapi.com/api/";

  constructor(private http: HttpClient){};

  getListCharacters(page : number = 1, name : string = "") {
    return this.http.get<any>(this.API_URL + 'character?page='+page+'&name='+name , {})
  }
  getCharacterById(id : string) {
    return this.http.get<any>(this.API_URL + 'character/'+id, {})
  }
}
