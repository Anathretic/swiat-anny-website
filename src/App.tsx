import { ApolloProvider } from '@apollo/client';
import { Outlet, Route, Routes } from 'react-router-dom';
import { client } from './apollo/apolloClient';
import { Order, PageNotFound, TermsAndConditions } from './subpages';
import { CookieBanner, Footer, Header, HomeWrapper } from './components';
import { Contact, Offer, Welcome, AboutMe, Opinions } from './sections';

export const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<Routes>
				<Route
					element={
						<>
							<Outlet />
							<Footer />
							<CookieBanner />
						</>
					}>
					<Route
						element={
							<>
								<Header />
								<Outlet />
							</>
						}>
						<Route
							path='/'
							element={
								<HomeWrapper>
									<Welcome />
									<AboutMe />
									<Offer />
									<Opinions />
									<Contact />
								</HomeWrapper>
							}
						/>
					</Route>
					<Route path='/regulamin' element={<TermsAndConditions />} />
				</Route>
				<Route path='/zloz-zamowienie' element={<Order />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</ApolloProvider>
	);
};
