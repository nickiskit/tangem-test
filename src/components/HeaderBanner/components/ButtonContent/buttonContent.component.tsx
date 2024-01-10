import React, { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@root/features/store';
import { DisplayState } from '@root/features/display/displaySlice';
import styles from '@root/components/HeaderBanner/components/ButtonContent/buttonContent.module.scss';
import { HEADER_BANNER_BUTTON_CONTENT } from '@root/constants/headerBannerButton';
import { hideHeaderBanner } from '@root/features/banner/bannerSlice';

const ButtonContentComponent: FC = memo(() => {
	const dispatch = useAppDispatch();
	const { type } = useSelector<RootState, DisplayState>(
		(state) => state.display
	);

	const close = useCallback(() => {
		dispatch(hideHeaderBanner());
	}, []);

	return (
		<div className={styles.root}>
			{HEADER_BANNER_BUTTON_CONTENT[type.toString()](close)}
		</div>
	);
});

ButtonContentComponent.displayName = 'ButtonContentComponent';

export default ButtonContentComponent;
