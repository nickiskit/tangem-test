import React, {FC, memo, useCallback} from 'react';
import { CloseIcon } from '@root/icons/icons';
import styles from '@root/components/MainBanner/components/ButtonContent/buttonContent.module.scss';
import {hideBanner} from "@root/utils/banner/banner.util";
import {useAppDispatch} from "@root/features/store";
import {showMainBanner} from "@root/features/banner/bannerSlice";

const ButtonContentComponent: FC = memo(() => {
	const dispatch = useAppDispatch();

	const onClick = useCallback(() => {
		hideBanner();
		dispatch(showMainBanner(false));
	}, [])

	return (
			<button className={styles.root} onClick={onClick}>
				<CloseIcon />
			</button>
	)
});

ButtonContentComponent.displayName = 'ButtonContentComponent';

export default ButtonContentComponent;
