import { EDisplayType } from '@root/models/display';
import {
	MOBILE_MAX,
	TABLET_MIN,
	TABLET_MAX,
	DESKTOP_MIN
} from '@root/constants/width';

/**
 * Get display type by window innerWidth
 * */
export const getDisplayType = () => {
	const width = window.innerWidth;

	if (width <= MOBILE_MAX) return EDisplayType.MOBILE;
	if (width >= TABLET_MIN && width <= TABLET_MAX) return EDisplayType.TABLET;

	return EDisplayType.DESKTOP;
};

/**
 * Check do need to change the type after window resize
 * @param {EDisplayType} type - Current display type
 * */
export const needToChangeType = (type: EDisplayType) => {
	const width = window.innerWidth;

	switch (type) {
		case EDisplayType.DESKTOP:
			return width < DESKTOP_MIN;
		case EDisplayType.TABLET:
			return width < TABLET_MIN || width > TABLET_MAX;
		case EDisplayType.MOBILE:
			return width > MOBILE_MAX;
		default:
			return false;
	}
};
