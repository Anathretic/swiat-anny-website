import { Link } from 'react-router-dom';
import { OfferDataModel } from '../../models/offer.model';
import { CarouselComponent } from './CarouselComponent';

export const OfferBox: React.FC<OfferDataModel> = ({ title, text, firstSrc, secondSrc, firstAlt, secondAlt }) => {
	return (
		<div className='offer__box dark-blue-gradient'>
			<CarouselComponent firstSrc={firstSrc} secondSrc={secondSrc} firstAlt={firstAlt} secondAlt={secondAlt} />
			<h3 className='offer__box-title'>{title}</h3>
			<p className='offer__box-text'>{text}</p>
			<Link to='/' className='offer__box-button'>
				Zamów
			</Link>
		</div>
	);
};
