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

  movie(name: string) {
    return `http://www.omdbapi.com/?s=${name}&apikey=dd15224`;
  }

//   fetch('https://api.themoviedb.org/3/search/movie?api_key=215be1bdb468a771c99cac7b142700c0&query=Jack').then(res=>res.json())
// .then(res=>console.log(res.results[3]))
}
