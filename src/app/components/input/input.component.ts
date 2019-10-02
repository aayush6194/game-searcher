import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  myForm: FormGroup;
  message: string;
  constructor(private formBuilder: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      game : ['', [
        Validators.required,
        Validators.minLength(2)
      ]]
    });

    this.myForm.valueChanges.subscribe((res)=>{
            this.data.changeMessage(res.game);
            console.log(res.game)
    })
  }
  submit(){
    console.log('Submitted');
  }

  get game(){
    return this.myForm.get('game');
  }
}
