export enum ACTIONS {
    START = 'START',
    GAME_OVER = 'GAME_OVER',
    TRY_AGAIN = 'TRY_AGAIN',
    SET_SCORE = 'SET_SCORE',
    SET_QUESTION = 'SET_QUESTION',
    SET_CORRECT = 'SET_CORRECT',
}

export interface LogoutInterface {
    type: ACTIONS.START;
}

export interface GameOverInterface {
    type: ACTIONS.GAME_OVER;
}

export interface TryAgainInterface {
    type: ACTIONS.TRY_AGAIN;
}

export interface SetScoreInterface {
    type: ACTIONS.SET_SCORE;
    payload: string;
}

export interface SetQuestionInterface {
    type: ACTIONS.SET_QUESTION;
    payload: number;
}
