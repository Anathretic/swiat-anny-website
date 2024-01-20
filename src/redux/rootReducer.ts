import { combineReducers } from 'redux';
import paintingSizeSlice from './paintingSizeReduxSlice/paintingSizeSlice';

export const rootReducer = combineReducers({
	paintingSizeReduxStore: paintingSizeSlice.reducer,
});
