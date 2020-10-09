import { ACTIONS } from '../types/action-types';

const tryAgain = (): { type: ACTIONS } => ({
    type: ACTIONS.TRY_AGAIN,
});

export default tryAgain;
