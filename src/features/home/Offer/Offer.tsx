import { useQuery } from '@apollo/client';
import { OFFERS } from './graphql/graph';
import { OfferBox } from './components/OfferBox';
import Loader from '../../../shared/components/Loader/Loader';
import { OfferDataModel } from './models/offer.model';

const Offer: React.FC = () => {
	const { loading, error, data } = useQuery(OFFERS, {
		fetchPolicy: 'cache-first',
	});

	return (
		<section id='oferta' className='offer'>
			<div className='offer__container'>
				<h2 className='offer__title'>Oferta</h2>
				<div className='offer__title-decoration' />
				{!error ? (
					!loading ? (
						<div className='offer__wrapper'>
							{data.offerCollection.edges.map((data: OfferDataModel, id: number) => (
								<OfferBox
									key={id}
									paintingSize={data.node.paintingSize}
									text={data.node.text}
									imageType={data.node.imageType}
									price={data.node.price}
									delay={data.node.delay}
								/>
							))}
						</div>
					) : (
						<Loader />
					)
				) : (
					<p className='offer__error'>Ups! Wygląda na to, że serwer ma przerwę..</p>
				)}
			</div>
		</section>
	);
};

export default Offer;
