import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { GameService } from '../../service/game.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  myForm: FormGroup;
  message: string;
  gameOptions: any;
  constructor(private formBuilder: FormBuilder,
              private data: DataService,
              private gameService: GameService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      game : ['', [
        Validators.required,
        Validators.minLength(2)
      ]]
    });

    this.myForm.valueChanges.subscribe((res) => {
            this.data.changeMessage(res.game);
    });

    this.data.currentMessage.subscribe(message => {this.message = message;
                                                   // tslint:disable-next-line: max-line-length
                                                   this.gameService.getGame(this.message).subscribe((res: any) => this.gameOptions = res.results.slice(0, 5));
    });
  }
  submit() {
    console.log('Submitted');
  }

  get game() {
    return this.myForm.get('game');
  }
}
