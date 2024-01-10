import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import styles from '@root/components/MainBanner/mainBanner.module.scss';
import mainBannerImage from '@public/images/main-banner-image.svg';
import TextContentComponent from '@root/components/MainBanner/components/TextContent/textContent.component';
import CallToActionContentComponent from '@root/components/MainBanner/components/CallToActionContent/callToActionContent.component';
import ButtonContentComponent from '@root/components/MainBanner/components/ButtonContent/buttonContent.component';
import clsx from 'clsx';
import { getPosition } from '@root/utils/banner/banner.util';

type TMainBannerComponentProps = {
	isShown?: boolean;
};

const MainBannerComponent: FC<TMainBannerComponentProps> = memo(
	({ isShown }) => {
		const [position, setPosition] = useState<
			{ top?: number } | { bottom?: number }
		>(getPosition());

		const handleWindowResize = useCallback(() => {
			const newPosition = getPosition();

			setPosition(newPosition);
		}, []);

		useEffect(() => {
			window.addEventListener('resize', handleWindowResize);

			return () => window.removeEventListener('resize', handleWindowResize);
		}, [handleWindowResize]);

		return (
			<div
				style={{ backgroundImage: `url(${mainBannerImage})`, ...position }}
				className={clsx(styles.root, isShown && styles.show)}>
				<ButtonContentComponent />
				<div className={styles.content}>
					<TextContentComponent />
					<CallToActionContentComponent />
				</div>
			</div>
		);
	}
);

MainBannerComponent.displayName = 'MainBannerComponent';

export default MainBannerComponent;
