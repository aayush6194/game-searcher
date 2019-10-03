import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameAddService {

  constructor() { }
  addGame(game: any) {
    let storedGames: any = JSON.parse(localStorage.getItem('games'));
    let newStoredGames = {games : [... [game], storedGames.games]};
    localStorage.setItem('games', JSON.stringify(newStoredGames));
  }

  getGames() {
    return JSON.parse(localStorage.getItem('games'));
  }
}
