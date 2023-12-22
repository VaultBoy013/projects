import { inputUserActions, inputUserReducer } from './userSearcher';
import { fetchReducer } from './fetch';

const actions = { ...inputUserActions };
const reducers = { inputUserReducer, fetchReducer };

export { actions, reducers };
