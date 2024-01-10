import React, { FC, memo } from 'react';

const DotIcon: FC = memo(() => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='3'
		height='4'
		viewBox='0 0 3 4'
		fill='none'>
		<circle
			cx='1.5'
			cy='2'
			r='1.5'
			fill='white'
			fillOpacity='0.15'
		/>
	</svg>
));

DotIcon.displayName = 'DotIcon';

export default DotIcon;
