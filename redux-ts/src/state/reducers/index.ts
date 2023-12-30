import { searcherActions, searcherReducer } from "./userSearcher";
import { fetchReducer } from "./fetch";
import { namesReducer, namesActions } from "./names";

const actions = { ...searcherActions, ...namesActions };
const reducers = { searcherReducer, fetchReducer, namesReducer };

export { actions, reducers };
