import React, {FC, memo, useEffect, useRef} from 'react';
import styles from '@root/components/HeaderBanner/headerBanner.module.scss';
import ImageContentComponent from '@root/components/HeaderBanner/components/ImageContent/imageContent.component';
import TextContentComponent from '@root/components/HeaderBanner/components/TextContent/textContent.component';
import ButtonContentComponent from '@root/components/HeaderBanner/components/ButtonContent/buttonContent.component';
import useIsInViewport from "@root/hooks/isInViewport.hooks";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "@root/features/store";
import {BannerState, showMainBanner} from "@root/features/banner/bannerSlice";

const TOP_PLUS_HEIGHT = 108;

const HeaderBannerComponent: FC = memo(() => {
	const dispatch = useAppDispatch();
	const ref = useRef<HTMLDivElement | null>(null);
	const isInViewport = useIsInViewport(ref, TOP_PLUS_HEIGHT);
	const { mainIsShown } = useSelector<RootState, BannerState>(
			(state) => state.banner
	);

	useEffect(() => {
		if (!isInViewport && !mainIsShown) {
			dispatch(showMainBanner(true));
		}
	}, [isInViewport, mainIsShown])

	return (
			<div className={styles.root} ref={ref}>
				<ImageContentComponent />
				<TextContentComponent />
				<ButtonContentComponent />
			</div>
	)
});

HeaderBannerComponent.displayName = 'HeaderBannerComponent';

export default HeaderBannerComponent;
