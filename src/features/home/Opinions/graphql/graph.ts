import { gql } from '@apollo/client';

export const OPINIONS = gql`
	query Opinions {
		opinionsCollection {
			edges {
				node {
					id
					title
					opinion
					name
				}
			}
		}
	}
`;
