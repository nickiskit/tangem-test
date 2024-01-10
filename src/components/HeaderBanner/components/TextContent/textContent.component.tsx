import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@root/features/store';
import { DisplayState } from '@root/features/display/displaySlice';
import { HEADER_BANNER_TEXT_CONTENT } from '@root/constants/headerBannerText';
import styles from '@root/components/HeaderBanner/components/TextContent/textContent.module.scss';

const TextContentComponent: FC = memo(() => {
	const { type } = useSelector<RootState, DisplayState>(
		(state) => state.display
	);

	return (
		<div className={styles.root}>
			{HEADER_BANNER_TEXT_CONTENT[type.toString()]()}
		</div>
	);
});

TextContentComponent.displayName = 'TextContentComponent';

export default TextContentComponent;
