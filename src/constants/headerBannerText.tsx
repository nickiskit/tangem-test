import React, { ReactNode } from 'react';
import { EDisplayType } from '@root/models/display';
import { DotIcon } from '@root/icons/icons';
import styles from '@root/components/HeaderBanner/components/TextContent/textContent.module.scss';
import clsx from 'clsx';
import { BANNER_TEXT } from '@root/constants/text';

export const HEADER_BANNER_TEXT_CONTENT: Record<string, () => ReactNode> = {
	[EDisplayType.DESKTOP.toString()]: () => (
		<>
			<span className={clsx(styles.text, styles.boldText)}>
				{BANNER_TEXT.INFO}
			</span>
			<span className={styles.text}>
				{', '}
				{BANNER_TEXT.DATE}
			</span>
			<DotIcon />
			<span className={clsx(styles.text, styles.boldText, styles.orangeText)}>
				{BANNER_TEXT.DISCOUNT}
			</span>
			<DotIcon />
			<span>
				<span className={styles.text}>
					{BANNER_TEXT.INSTRUCTION_FIRST_PART}
				</span>{' '}
				<span className={clsx(styles.text, styles.boldText, styles.orangeText)}>
					{BANNER_TEXT.CODE}
				</span>{' '}
				<span className={styles.text}>
					{BANNER_TEXT.INSTRUCTION_SECOND_PART}
				</span>
			</span>
		</>
	),
	[EDisplayType.TABLET.toString()]: () => (
		<>
			<span className={clsx(styles.text, styles.boldText)}>
				{BANNER_TEXT.INFO}
			</span>
			<DotIcon />
			<span className={clsx(styles.text, styles.boldText, styles.orangeText)}>
				{BANNER_TEXT.DISCOUNT}
			</span>
			<DotIcon />
			<span>
				<span className={styles.text}>
					{BANNER_TEXT.INSTRUCTION_FIRST_PART}
				</span>{' '}
				<span className={clsx(styles.text, styles.boldText, styles.orangeText)}>
					{BANNER_TEXT.CODE}
				</span>
			</span>
		</>
	),
	[EDisplayType.MOBILE.toString()]: () => (
		<span>
			<span className={clsx(styles.text, styles.boldText)}>
				{BANNER_TEXT.INFO}
				{', '}
			</span>
			<span className={clsx(styles.text, styles.boldText, styles.orangeText)}>
				{BANNER_TEXT.DISCOUNT}
			</span>
		</span>
	)
};
