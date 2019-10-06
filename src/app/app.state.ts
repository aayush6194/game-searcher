import { Game } from '../models';

export interface AppState {
    readonly game: Game[];
}