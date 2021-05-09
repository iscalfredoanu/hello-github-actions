import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
private API_URL="https://rickandmortyapi.com/api/";

  constructor(private http: HttpClient){};

  getLocationById(id : string) {
    return this.http.get<any>(this.API_URL + 'location/'+id, {})
  }
}
