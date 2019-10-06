import { Action } from '@ngrx/store';
import { Game } from '../../../models';
import * as GameActions from '../action';

const initialState: any = {
    name :  'Initial'
};


export function reducer( state: any = [initialState], action: any){
    switch (action.type) {
        case GameActions.ADD_GAME:
            return {

            };

        case GameActions.REMOVE_GAME:
            return {

            };
        default:
            return state;
    }
}