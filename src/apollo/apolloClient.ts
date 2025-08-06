import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist';

const CACHE_EXPIRATION_KEY = import.meta.env.VITE_CACHE_EXPIRATION_KEY;
const CACHE_MAX_AGE = 60 * 60 * 1000;

const cache = new InMemoryCache();

const httpLink = createHttpLink({
	uri: `${import.meta.env.VITE_API_URL}/graphql/v1`,
	headers: {
		apiKey: `${import.meta.env.VITE_API_KEY}`,
	},
});

export const createApolloClient = async () => {
	await persistCache({
		cache,
		storage: new LocalStorageWrapper(window.localStorage),
	});

	const lastSaved = localStorage.getItem(CACHE_EXPIRATION_KEY);
	const now = Date.now();

	if (!lastSaved || now - Number(lastSaved) > CACHE_MAX_AGE) {
		await cache.reset();
		localStorage.clear();
		localStorage.setItem(CACHE_EXPIRATION_KEY, now.toString());
	}

	return new ApolloClient({
		link: httpLink,
		cache,
		connectToDevTools: true,
	});
};
