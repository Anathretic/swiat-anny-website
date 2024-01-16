import { Link } from 'react-router-dom';
import { OfferDataModel } from '../../models/offer.model';
import { CarouselComponent } from './CarouselComponent';
import { scrollToTop } from '../../utils/scrollToTop';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setSize } from '../../redux/popupSelectPaintingSizeReduxSlice/popupSelectPaintingSizeSlice';

export const OfferBox: React.FC<OfferDataModel> = ({
	title,
	text,
	firstSrc,
	secondSrc,
	firstAlt,
	secondAlt,
	paintingSize,
}) => {
	const dispatch = useAppDispatch();

	return (
		<div className='offer__box dark-blue-gradient'>
			<CarouselComponent firstSrc={firstSrc} secondSrc={secondSrc} firstAlt={firstAlt} secondAlt={secondAlt} />
			<h3 className='offer__box-title'>{title}</h3>
			<p className='offer__box-text'>{text}</p>
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
