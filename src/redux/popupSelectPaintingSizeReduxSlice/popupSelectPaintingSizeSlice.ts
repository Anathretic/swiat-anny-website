import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { SelectSize } from '../../models/slices.model';

const initialState: SelectSize = {
	size: '',
};

const popupSelectPaintingSizeSlice = createSlice({
	name: 'popupSelectPaintingSize',
	initialState,
	reducers: {
		setSize: (state, action) => {
			state.size = action.payload;
		},
		resetSize: state => {
			state.size = '';
		},
	},
});

export const { setSize, resetSize } = popupSelectPaintingSizeSlice.actions;

export const getPopupSelectPaintingSizeInitialValue = (state: RootState) =>
	state.popupSelectPaintingSizeReduxStore.size;

export default popupSelectPaintingSizeSlice;
