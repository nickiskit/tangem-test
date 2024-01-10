import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import MainScreen from '@root/screens/Main/screenMain.components';
import '@root/styles/style.module.scss';
import store from '@root/features/store';
import { Provider } from 'react-redux';
import LayoutComponent from '@root/components/Layout/layout.component';

const App: FC = () => (
	<LayoutComponent>
		<MainScreen />
	</LayoutComponent>
);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
