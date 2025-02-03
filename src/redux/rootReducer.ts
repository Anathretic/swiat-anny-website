import { combineReducers } from 'redux';
import paintingSizeSlice from './paintingSizeReduxSlice/paintingSizeSlice';
import contactAndOrderFormSlice from './contactAndOrderFormReduxSlice/contactAndOrderFormSlice';

export const rootReducer = combineReducers({
	paintingSizeReduxStore: paintingSizeSlice.reducer,
	contactAndOrderFormReduxStore: contactAndOrderFormSlice.reducer,
});
