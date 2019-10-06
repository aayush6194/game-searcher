import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Game } from '../../../models';

export const ADD_GAME = 'ADD_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';

export class AddGame implements Action {
    readonly type = ADD_GAME;
    constructor(public payload: Game){}
}

export class RemoveGame implements Action {
    readonly type = ADD_GAME;
    constructor(public payload: Game){}
}

export type Actions = AddGame | RemoveGame;