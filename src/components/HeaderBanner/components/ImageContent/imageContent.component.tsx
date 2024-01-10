import React, { FC, memo } from 'react';
import styles from '@root/components/HeaderBanner/components/ImageContent/imageContent.module.scss';
import headerBannerImage from '@public/images/header-banner-image.svg';

const ImageContentComponent: FC = memo(() => (
	<div
		style={{ backgroundImage: `url(${headerBannerImage})` }}
		className={styles.root}
	/>
));

ImageContentComponent.displayName = 'ImageContentComponent';

export default ImageContentComponent;
