import React, { FC, memo } from 'react';

const MenuIcon: FC = memo(() => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='30'
		height='30'
		viewBox='0 0 30 30'
		fill='none'>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M10.8373 22.8105C11.1302 23.1034 11.6051 23.1034 11.898 22.8105L19.1621 15.5463C19.2981 15.4104 19.3709 15.2352 19.3807 15.0573C19.4058 14.8378 19.3342 14.6094 19.1659 14.441L11.902 7.17716C11.6092 6.88427 11.1343 6.88427 10.8414 7.17717C10.5485 7.47006 10.5485 7.94493 10.8414 8.23783L17.5954 14.9918L10.8373 21.7498C10.5445 22.0427 10.5445 22.5176 10.8373 22.8105Z'
			fill='#D9D9D9'
			fillOpacity='0.4'
		/>
	</svg>
));

MenuIcon.displayName = 'MenuIcon';

export default MenuIcon;
