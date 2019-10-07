import { Component, OnInit, Input } from '@angular/core';
import { GameAddService } from '../../service/game-add.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game;
  @Input() delete: boolean;
  imageLoader = true;
  imageError = false;
  myStore: Observable<any>;
  constructor(private gameAddService: GameAddService, private store: Store<any>) {
    this.myStore = store.select('game');
  }

  ngOnInit() {
    // setTimeout((): void => {
    //   if (!this.imageLoader) {
    //     this.imageError = true;
    //     this.imageLoader = false;
    //   }
    // }, 10000);
    console.log(this.gameAddService.getGames());
  }
  addGame() {
    this.gameAddService.addGame(this.game);
    this.store.dispatch({type: 'ADD_GAME', payload: this.game});
  }

  deleteGame() {
    this.gameAddService.addGame(this.game);
    this.store.dispatch({type: 'REMOVE_GAME', payload: this.game});
  }

}
