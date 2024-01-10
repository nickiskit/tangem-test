import { EDisplayType } from '@root/models/display';
import {
	MOBILE_MAX,
	TABLET_MIN,
	TABLET_MAX,
	DESKTOP_MIN
} from '@root/constants/width';

export const getDisplayType = (width: number) => {
	if (width <= MOBILE_MAX) return EDisplayType.MOBILE;
	if (width >= TABLET_MIN && width <= TABLET_MAX) return EDisplayType.TABLET;

	return EDisplayType.DESKTOP;
};

export const needToChangeType = (type: EDisplayType, width: number) => {
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
