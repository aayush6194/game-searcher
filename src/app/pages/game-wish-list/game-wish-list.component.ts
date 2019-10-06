import { Component, OnInit } from '@angular/core';
import { GameAddService } from '../../service/game-add.service';
import { AppState} from '../../app.state';
import { Game } from '../../../models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-game-wish-list',
  templateUrl: './game-wish-list.component.html',
  styleUrls: ['./game-wish-list.component.css']
})
export class GameWishListComponent implements OnInit {

  gameList: Observable<Game[]>;
  constructor(private gameAddService: GameAddService,  private store: Store<AppState>) {
    this.store.select('game').subscribe((data: any) => this.gameList = data);
    console.log(this.gameList);
  }

  ngOnInit() {
  }

}
