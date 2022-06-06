import { combineReducers } from "redux";

import developerReducer from "./developer/developer.reducer";

const rootReducer = combineReducers({
	developer: developerReducer
});

export default rootReducer;