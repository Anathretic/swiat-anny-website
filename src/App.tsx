import { Outlet, Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Header } from './components/Header';
import { Offer } from './components/Offer';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

export const App: React.FC = () => {
	return (
		<Routes>
			<Route
				element={
					<>
						<CookieBanner />
						<Outlet />
					</>
				}>
				<Route path='/' element={<Welcome />} />
				<Route
					path='oferta'
					element={
						<>
							<Header />
							<Offer />
							<Footer />
						</>
					}
				/>
			</Route>
			<Route path='*' element={<div>Strona nie istnieje!</div>} />
		</Routes>
	);
};
