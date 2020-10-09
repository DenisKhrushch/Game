import {
    ACTIONS,
    GameOverInterface,
    LogoutInterface,
    SetScoreInterface,
    TryAgainInterface,
} from '../types/action-types';

export interface RootReducerProperties {
    started: boolean;
    gameOver: boolean;
    score: string;
}

const initialState: RootReducerProperties = {
    started: false,
    gameOver: false,
    score: '$0',
};

type RootReducerAction = LogoutInterface | GameOverInterface | TryAgainInterface | SetScoreInterface;

export const rootReducer = (state = initialState, action: RootReducerAction) => {
    switch (action.type) {
        case ACTIONS.START:
            return {
                ...state,
                started: true,
            };
        case ACTIONS.SET_SCORE:
            return {
                ...state,
                score: action.payload,
            };
        case ACTIONS.GAME_OVER:
            return {
                ...state,
                gameOver: true,
            };
        case ACTIONS.TRY_AGAIN:
            return {
                ...state,
                gameOver: false,
                score: '',
            };
        default:
            return state;
    }
};
