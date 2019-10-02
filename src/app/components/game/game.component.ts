import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game;
  imageLoader = true;
  imageError = false;
  constructor() {}

  ngOnInit() {
    // setTimeout((): void => {
    //   if (!this.imageLoader) {
    //     this.imageError = true;
    //     this.imageLoader = false;
    //   }
    // }, 10000);
  }
}
