import { Component, OnInit, Input } from '@angular/core';
import { GameAddService } from '../../service/game-add.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game;
  imageLoader = true;
  imageError = false;
  constructor(private GameAddService: GameAddService) {}

  ngOnInit() {
    // setTimeout((): void => {
    //   if (!this.imageLoader) {
    //     this.imageError = true;
    //     this.imageLoader = false;
    //   }
    // }, 10000);
    console.log(this.GameAddService.getGames());
  }
  addGame() {
    this.GameAddService.addGame(this.game);
  }

}
