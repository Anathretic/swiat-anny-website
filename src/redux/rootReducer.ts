import { combineReducers } from 'redux';
import popupSelectPaintingSizeSlice from './popupSelectPaintingSizeReduxSlice/popupSelectPaintingSizeSlice';

export const rootReducer = combineReducers({
	popupSelectPaintingSizeReduxStore: popupSelectPaintingSizeSlice.reducer,
});
