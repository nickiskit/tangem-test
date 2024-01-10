import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type BannerState = {
	headerIsShown: boolean;
	mainIsShown: boolean;
};

const initialState: BannerState = {
	headerIsShown: true,
	mainIsShown: false
};

export const bannerSlice = createSlice({
	name: 'banner',
	initialState,
	reducers: {
		hideHeaderBanner: (state) => {
			state.headerIsShown = false;
		},
		showMainBanner: (state, action: PayloadAction<boolean>) => {
			state.mainIsShown = action.payload;
		}
	}
});

const { actions, reducer } = bannerSlice;
export const { hideHeaderBanner, showMainBanner } = actions;
export default reducer;
