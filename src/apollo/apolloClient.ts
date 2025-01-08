import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
	uri: `${import.meta.env.VITE_API_URL}/graphql/v1`,
	headers: {
		apiKey: `${import.meta.env.VITE_API_KEY}`,
	},
});

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
