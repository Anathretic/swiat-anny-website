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
							<Header />
							<Outlet />
							<Footer />
							<CookieBanner />
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
				<Route path='/zloz-zamowienie' element={<Order />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</ApolloProvider>
	);
};
