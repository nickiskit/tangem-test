import React, { ReactNode } from 'react';
import { EDisplayType } from '@root/models/display';
import { BUTTONS_TEXT } from '@root/constants/text';
import styles from '@root/components/HeaderBanner/components/ButtonContent/buttonContent.module.scss';
import { CloseIcon, MenuIcon } from '@root/icons/icons';

export const HEADER_BANNER_BUTTON_CONTENT: Record<
	string,
	(close?: () => void) => ReactNode
> = {
	[EDisplayType.DESKTOP.toString()]: (close?: () => void) => (
		<>
			<button className={styles.button}>
				<span className={styles.buttonText}>
					{BUTTONS_TEXT.HEADER_BANNER_BUTTON}
				</span>
			</button>
			<button
				className={styles.actionButton}
				onClick={close}>
				<CloseIcon />
			</button>
		</>
	),
	[EDisplayType.TABLET.toString()]: () => (
		<button className={styles.button}>
			<div className={styles.buttonText}>
				{BUTTONS_TEXT.HEADER_BANNER_BUTTON}
			</div>
		</button>
	),
	[EDisplayType.MOBILE.toString()]: () => (
		<button className={styles.actionButton}>
			<MenuIcon />
		</button>
	)
};
