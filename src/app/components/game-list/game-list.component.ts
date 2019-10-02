import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games = [{slug : 'a'}];
  message: string;
  constructor(private game: GameService, private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {this.message = message;
                                                   this.game.getGame(this.message).subscribe((res: any) => this.games = res.results);
    });
  }

}
