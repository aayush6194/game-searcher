import { Component, OnInit } from '@angular/core';
import { GameAddService } from '../../service/game-add.service';

@Component({
  selector: 'app-game-wish-list',
  templateUrl: './game-wish-list.component.html',
  styleUrls: ['./game-wish-list.component.css']
})
export class GameWishListComponent implements OnInit {
  games : any;
  constructor(private gameAddService: GameAddService) { }

  ngOnInit() {
    this.games = this.gameAddService.getGames().games;
    console.log(this.games);
  }

}
