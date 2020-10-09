import { ACTIONS } from '../types/action-types';

const start = (): { type: ACTIONS } => ({
    type: ACTIONS.START,
});

export default start;
