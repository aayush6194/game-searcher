import { Action } from '@ngrx/store';
import { Game } from '../../../models';
import * as GameActions from '../action';
import { GameAddService } from '../../service/game-add.service';
 
let g: GameAddService = new  GameAddService();
const initialState: any  = g.getGames().games;

export function reducer( state: any[] = initialState, action: any){
    switch (action.type) {
        case GameActions.ADD_GAME:
            return[
                ...state
            ];

        case GameActions.REMOVE_GAME:
            return {

            };
        default:
            return state;
    }
}