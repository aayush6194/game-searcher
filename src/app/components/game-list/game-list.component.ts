import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { DataService } from '../../service/data.service';
import { AppState} from '../../app.state';
import { Game } from '../../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: any[];
  message: string;
  gameList: Observable<Game[]>;
  constructor(private game: GameService, private data: DataService, private store: Store<AppState>) {
    this.store.select('game').subscribe((data : any) => this.gameList = data);
    console.log('this.gameList');
    console.log(this.gameList);
    this.store.dispatch({type: 'ADD_GAME'});
   }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {this.message = message;
                                                   this.game.getGame(this.message).subscribe((res: any) => { this.games = res.results});
    });
  }

}
