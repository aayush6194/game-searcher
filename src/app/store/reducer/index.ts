import { Action } from '@ngrx/store';
import { Game } from '../../../models';
import * as GameActions from '../action';

const initialState: any = {
    name :  'Initial'
};


export function reducer( state: Game[] = [initialState], action: any){
    switch (action.type) {
        case GameActions.ADD_GAME:
            return[
                ...state, {name : 'tup'}
            ];

        case GameActions.REMOVE_GAME:
            return {

            };
        default:
            return state;
    }
}