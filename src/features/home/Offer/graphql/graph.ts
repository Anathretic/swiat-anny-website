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
