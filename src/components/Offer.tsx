import { offerData } from '../data/offerData';
import { OfferBox } from './offerComponents/OfferBox';

export const Offer: React.FC = () => {
	return (
		<main>
			<div className='offer'>
				<div className='offer__container'>
					{offerData.map(data => (
						<OfferBox
							key={data.id}
							title={data.title}
							text={data.text}
							firstSrc={data.firstSrc}
							secondSrc={data.secondSrc}
							firstAlt={data.firstAlt}
							secondAlt={data.secondAlt}
							paintingSize={data.paintingSize}
						/>
					))}
				</div>
			</div>
		</main>
	);
};
