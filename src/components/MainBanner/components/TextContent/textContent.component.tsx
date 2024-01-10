import React, { FC, memo } from 'react';
import styles from '@root/components/MainBanner/components/TextContent/textContent.module.scss';
import { BANNER_TEXT } from '@root/constants/text';

const TextContentComponent: FC = memo(() => (
	<div className={styles.root}>
		<span className={styles.title}>{BANNER_TEXT.INFO}</span>
		<span className={styles.discount}>{BANNER_TEXT.DISCOUNT}</span>
		<span className={styles.instruction}>
			{BANNER_TEXT.INSTRUCTION_FIRST_PART}{' '}
			<span className={styles.code}>{BANNER_TEXT.CODE}</span>{' '}
			{BANNER_TEXT.INSTRUCTION_SECOND_PART}
		</span>
	</div>
));

TextContentComponent.displayName = 'TextContentComponent';

export default TextContentComponent;
