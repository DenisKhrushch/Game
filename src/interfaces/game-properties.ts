import { ACTIONS } from '../store/types/action-types';

export interface GameProperties {
    started: boolean;
    gameOver: boolean;
    onSetScore: (score: string) => { type: ACTIONS; payload: string };
    score: string;
    onGameOver: () => void;
}
