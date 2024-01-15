import { Outlet, Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Header } from './components/Header';
import { Offer } from './components/Offer';
import { Contact } from './components/Contact';
import { TermsAndConditions } from './components/TermsAndConditions';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/littleComponents/CookieBanner';
import { PageNotFound } from './components/PageNotFound';

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
				<Route
					path='/'
					element={
						<>
							<Welcome />
							<Footer />
						</>
					}
				/>
				<Route
					element={
						<>
							<Header />
							<Outlet />
							<Footer />
						</>
					}>
					<Route path='oferta' element={<Offer />} />
					<Route path='kontakt' element={<Contact />} />
					<Route path='regulamin' element={<TermsAndConditions />} />
				</Route>
			</Route>
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
};
