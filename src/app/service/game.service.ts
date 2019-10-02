import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  url = 'https://api.rawg.io/api/games?page_size=15&search=';

  constructor(private http: HttpClient) { }
  getGame(name: string): Observable<any> {
    return this.http.get(this.url + name);
  }
}
