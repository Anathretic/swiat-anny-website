import { ApolloProvider } from '@apollo/client';
import { Outlet, Route, Routes } from 'react-router-dom';
import { client } from './apollo/apolloClient';
import { Contact, Offer, Order, PageNotFound, TermsAndConditions, Welcome } from './subpages';
import { CookieBanner, Footer, Header } from './components';

export const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
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
						<Route path='/oferta' element={<Offer />}></Route>
						<Route path='/kontakt' element={<Contact />} />
						<Route path='/regulamin' element={<TermsAndConditions />} />
					</Route>
					<Route path='/zloz-zamowienie' element={<Order />} />
				</Route>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</ApolloProvider>
	);
};
