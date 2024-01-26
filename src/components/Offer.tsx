import { OfferBox } from './offerComponents/OfferBox';
import { OfferData } from '../models/offer.model';
import { useQuery, gql } from '@apollo/client';

const OFFERS = gql`
	query GetOffers {
		annaOffers {
			data {
				id
				attributes {
					paintingSize
					offerText
					image {
						data {
							attributes {
								url
							}
						}
					}
					imageAlt
				}
			}
		}
	}
`;

export const Offer: React.FC = () => {
	const { loading, error, data } = useQuery(OFFERS);

	if (error) {
		console.log('An error has occurred! Look: ' + error.message);
	}

	return (
		<main>
			<div className='offer'>
				<div className='offer__container'>
					{!loading ? (
						<>
							{data.annaOffers.data.map((data: OfferData, id: number) => (
								<OfferBox
									key={id}
									paintingSize={data.attributes.paintingSize}
									offerText={data.attributes.offerText}
									image={data.attributes.image}
									imageAlt={data.attributes.imageAlt}
								/>
							))}
						</>
					) : (
						<div>Loading...</div>
					)}
				</div>
			</div>
		</main>
	);
};
