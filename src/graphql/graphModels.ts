import { gql } from '@apollo/client';

export const OFFERS = gql`
	query Offer {
		offerCollection {
			edges {
				node {
					id
					paintingSize
					text
					imageType
					price
					delay
				}
			}
		}
	}
`;

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
