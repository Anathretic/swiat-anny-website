import { combineReducers } from 'redux';
import paintingSizeSlice from './sharedSlices/paintingSizeSlice';
import contactAndOrderFormSlice from './sharedSlices/contactAndOrderFormSlice';

export const rootReducer = combineReducers({
	paintingSizeReduxStore: paintingSizeSlice.reducer,
	contactAndOrderFormReduxStore: contactAndOrderFormSlice.reducer,
});
