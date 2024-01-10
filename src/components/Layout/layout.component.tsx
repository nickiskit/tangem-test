import React, { FC, ReactNode, useCallback, useEffect } from 'react';
import { RootState, useAppDispatch } from '@root/features/store';
import { changeType, DisplayState } from '@root/features/display/displaySlice';
import {
	getDisplayType,
	needToChangeType
} from '@root/utils/display/display.util';
import { useSelector } from 'react-redux';

type TLayoutProps = {
	children: React.JSX.Element | ReactNode;
};

const LayoutComponent: FC<TLayoutProps> = ({ children }) => {
	const dispatch = useAppDispatch();
	const { type } = useSelector<RootState, DisplayState>(
		(state) => state.display
	);

	const handleWindowResize = useCallback(() => {
		const width = window.innerWidth;

		if (needToChangeType(type, width)) {
			const newType = getDisplayType(width);
			dispatch(changeType(newType));
		}
	}, [type]);

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, [handleWindowResize]);

	return <>{children}</>;
};

export default LayoutComponent;
