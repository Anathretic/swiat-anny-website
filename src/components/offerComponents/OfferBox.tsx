import { Link } from 'react-router-dom';
import { OfferBoxModel } from '../../models/offer.model';
import { CarouselComponent } from './CarouselComponent';
import { scrollToTop } from '../../utils/scrollToTop';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setSize } from '../../redux/paintingSizeReduxSlice/paintingSizeSlice';

export const OfferBox: React.FC<OfferBoxModel> = ({
	paintingSize,
	offerText,
	firstImage,
	secondImage,
	firstAlt,
	secondAlt,
}) => {
	const dispatch = useAppDispatch();

	return (
		<div className='offer__box dark-blue-gradient'>
			<CarouselComponent
				firstImage={`http://localhost:1337${firstImage.data.attributes.url}`}
				secondImage={`http://localhost:1337${secondImage.data.attributes.url}`}
				firstAlt={firstAlt}
				secondAlt={secondAlt}
			/>
			<h3 className='offer__box-title'>{paintingSize}</h3>
			<p className='offer__box-text'>{offerText}</p>
			<Link
				to='/zloz-zamowienie'
				className='offer__box-button'
				onClick={() => {
					scrollToTop();
					dispatch(setSize(paintingSize));
				}}>
				Wybierz
			</Link>
		</div>
	);
};
