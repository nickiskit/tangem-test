import { configureStore } from '@reduxjs/toolkit';
import displayReducer from '@root/features/display/displaySlice';
import bannerReducer from '@root/features/banner/bannerSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
	reducer: {
		display: displayReducer,
		banner: bannerReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export default store;
