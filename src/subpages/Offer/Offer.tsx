import { useQuery } from '@apollo/client';
import { OfferBox } from './offerComponents/OfferBox';
import { Loader } from '../../components';
import { OFFERS } from '../../graphql/offerGraph';
import { OfferDataModel } from '../../models/offer.model';

const Offer: React.FC = () => {
	const { loading, error, data } = useQuery(OFFERS);

	return (
		<main>
			<div className='offer'>
				<div className='offer__container'>
					<h2 className='offer__title'>Oferta</h2>
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
							<Loader className='loader loader--offer' />
						)
					) : (
						<p className='offer__error'>Ups! Wystąpił nieoczekiwany błąd! Spróbuj ponownie..</p>
					)}
				</div>
			</div>
		</main>
	);
};

export default Offer;
