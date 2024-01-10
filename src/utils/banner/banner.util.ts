import {
	HEADER_BANNER_HEIGHT_PLUS_TOP,
	MAIN_BANNER_HEIGHT_PLUS_BOTTOM,
	MAIN_BANNER_POSITION
} from '@root/constants/style';

/**
 * Set bannerIsHidden value into sessionStorage to hide main banner
 * */
export const hideBanner = () => {
	sessionStorage.setItem('bannerIsHidden', 'true');
};

/**
 * Get bannerIsHidden value from sessionStorage and check is main banner hidden
 * */
export const isBannerHidden = () =>
	sessionStorage.getItem('bannerIsHidden') === 'true';

/**
 * Calculate main banner position
 * */
export const getPosition = () => {
	const height = window.innerHeight;

	return height - HEADER_BANNER_HEIGHT_PLUS_TOP <=
		MAIN_BANNER_HEIGHT_PLUS_BOTTOM
		? MAIN_BANNER_POSITION.TOP
		: MAIN_BANNER_POSITION.BOTTOM;
};
