import { ACTIONS } from '../types/action-types';

const setQuestion = (question: number): { type: ACTIONS; payload: number } => ({
    type: ACTIONS.SET_QUESTION,
    payload: question,
});

export default setQuestion;
