import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ContactAndOrderFormSliceModel } from '../../shared/models/reduxSlices.model';

const initialState: ContactAndOrderFormSliceModel = {
	isLoading: false,
	errorValue: '',
	buttonText: 'Wyślij',
};

const contactAndOrderFormSlice = createSlice({
	name: 'contactAndOrderForm',
	initialState,
	reducers: {
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setErrorValue: (state, action: PayloadAction<string>) => {
			state.errorValue = action.payload;
		},
		setButtonText: (state, action: PayloadAction<string>) => {
			state.buttonText = action.payload;
		},
	},
});

export const { setIsLoading, setErrorValue, setButtonText } = contactAndOrderFormSlice.actions;

export const getContactAndOrderFormInitialValues = (state: RootState) => state.contactAndOrderFormReduxStore;

export default contactAndOrderFormSlice;
