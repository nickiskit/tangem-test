import React, { FC, memo } from 'react';
import styles from '@root/components/MainBanner/components/CallToActionContent/callToActionContent.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@root/features/store';
import { DisplayState } from '@root/features/display/displaySlice';
import { EDisplayType } from '@root/models/display';
import { BUTTONS_TEXT } from '@root/constants/text';

const CallToActionContentComponent: FC = memo(() => {
	const { type } = useSelector<RootState, DisplayState>(
		(state) => state.display
	);

	return (
		<button className={styles.root}>
			{type === EDisplayType.MOBILE
				? BUTTONS_TEXT.CALL_TO_ACTION_BUTTON_MOBILE
				: BUTTONS_TEXT.CALL_TO_ACTION_BUTTON}
		</button>
	);
});

CallToActionContentComponent.displayName = 'CallToActionContentComponent';

export default CallToActionContentComponent;
