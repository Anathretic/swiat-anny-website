import { Link } from 'react-router-dom';
import { OfferBoxModel } from '../../models/offer.model';
import { ImageComponent } from './ImageComponent';
import { scrollToTop } from '../../utils/scrollToTop';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setSize } from '../../redux/paintingSizeReduxSlice/paintingSizeSlice';

export const OfferBox: React.FC<OfferBoxModel> = ({ paintingSize, text, imageID, imageAlt }) => {
	const dispatch = useAppDispatch();

	return (
		<div className='offer__box dark-blue-gradient'>
			<ImageComponent imageID={imageID} imageAlt={imageAlt} />
			<h3 className='offer__box-title'>{paintingSize}</h3>
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
