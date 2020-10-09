import { ACTIONS } from '../types/action-types';

const gameOver = (): { type: ACTIONS } => ({
    type: ACTIONS.GAME_OVER,
});

export default gameOver;
