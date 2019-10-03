import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameAddService {

  constructor() { }
  addGame(game: any) {
    let allGames : any= localStorage.getItem('games');
    let storedGames: any = JSON.parse(allGames === null ? JSON.stringify({games : []}) : allGames);
   // let newStoredGames = {games : [... [game], storedGames.games]};
   storedGames['games'].push(game)
    localStorage.setItem('games', JSON.stringify(storedGames));
  }

  getGames() {
    return JSON.parse(localStorage.getItem('games'));
  }
}
