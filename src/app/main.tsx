import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { App } from './App';

import '../shared/styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<BrowserRouter>
					<App></App>
				</BrowserRouter>
			</Provider>
		</HelmetProvider>
	</React.StrictMode>
);
