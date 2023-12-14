import { createBrowserRouter } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { App } from './App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Welcome />,
	},
	{
		path: 'anna-maluje',
		element: <App />,
	},
	{
		path: '*',
		element: <div>Strony nie znaleziono!</div>,
	},
]);
