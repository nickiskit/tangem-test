import React, { FC, memo } from 'react';
import HeaderBannerComponent from '@root/components/HeaderBanner/headerBanner.component';
import MainBannerComponent from '@root/components/MainBanner/mainBanner.component';
import {useSelector} from "react-redux";
import {RootState} from "@root/features/store";
import {BannerState} from "@root/features/banner/bannerSlice";
import {isBannerHidden} from "@root/utils/banner/banner.util";

const MainScreen: FC = memo(() => {
	const { headerIsShown, mainIsShown } = useSelector<RootState, BannerState>(
			(state) => state.banner
	);

	return (
		<>
			{headerIsShown && <HeaderBannerComponent/>}
			<MainBannerComponent isShown={mainIsShown && !isBannerHidden()} />
		</>
	);
});

MainScreen.displayName = 'MainScreen';

export default MainScreen;
