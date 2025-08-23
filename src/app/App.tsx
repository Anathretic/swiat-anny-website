import { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { Outlet, Route, Routes } from 'react-router-dom';
import { createApolloClient } from '../shared/apollo/apolloClient';
import Header from '../shared/components/Header/Header';
import Footer from '../shared/components/Footer/Footer';
import CookieBanner from '../shared/components/CookieBanner/CookieBanner';
import { Home } from '../features/home/Home';
import TermsAndConditions from '../features/terms/TermsAndConditions';
import Order from '../features/order/Order';
import PageNotFound from '../features/error-404/PageNotFound';

export const App: React.FC = () => {
	const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null);

	useEffect(() => {
		createApolloClient().then(setClient);
	}, []);

	return (
		<>
			{client && (
				<ApolloProvider client={client}>
					<Routes>
						<Route
							element={
								<>
									<Header />
									<Outlet />
									<Footer />
									<CookieBanner />
								</>
							}>
							<Route path='/' element={<Home />} />
						</Route>
						<Route path='/regulamin' element={<TermsAndConditions />} />
						<Route path='/zloz-zamowienie' element={<Order />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</ApolloProvider>
			)}
		</>
	);
};
