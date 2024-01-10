import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EDisplayType } from '@root/models/display';
import { getDisplayType } from '@root/utils/display/display.util';

export type DisplayState = {
	type: EDisplayType;
};

const initialState: DisplayState = {
	type: getDisplayType(window.innerWidth)
};

export const displaySlice = createSlice({
	name: 'display',
	initialState,
	reducers: {
		changeType: (state, action: PayloadAction<EDisplayType>) => {
			state.type = action.payload;
		}
	}
});

const { actions, reducer } = displaySlice;
export const { changeType } = actions;
export default reducer;
