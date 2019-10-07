import { Action } from '@ngrx/store';
import { Game } from '../../../models';
import * as GameActions from '../action';
import { GameAddService } from '../../service/game-add.service';
import { variable } from '@angular/compiler/src/output/output_ast';
let g: GameAddService = new  GameAddService();
const initialState: any  = g.getGames().games;

export function reducer( state: any[] = initialState, action: any){
    switch (action.type) {
        case GameActions.ADD_GAME:
            const hasGame: boolean = state.reduce((acc, value) => acc || value.id === action.payload.id, false);
            alert(`Game ${hasGame ? 'Already Exists!' : 'added'}`);
            return hasGame ? state : [action.payload].concat(state);

        case GameActions.REMOVE_GAME:
            return state.filter((value) => action.payload.id !== value.id);
        default:
            return state;
    }
}