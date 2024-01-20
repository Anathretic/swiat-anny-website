import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Size } from '../../models/slices.model';

const initialState: Size = {
	size: '',
};

const paintingSizeSlice = createSlice({
	name: 'paintingSize',
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

export const { setSize, resetSize } = paintingSizeSlice.actions;

export const getPaintingSizeInitialValue = (state: RootState) => state.paintingSizeReduxStore.size;

export default paintingSizeSlice;
