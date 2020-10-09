import { ACTIONS } from '../types/action-types';

const setScore = (score: string): { type: ACTIONS; payload: string } => ({
    type: ACTIONS.SET_SCORE,
    payload: score,
});

export default setScore;
