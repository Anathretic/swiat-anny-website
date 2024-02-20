import { Link } from 'react-router-dom';
import { OfferBoxModel } from '../../models/offer.model';
import { ImageComponent } from './ImageComponent';
import { scrollToTop } from '../../utils/scrollToTop';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setSize } from '../../redux/paintingSizeReduxSlice/paintingSizeSlice';

export const OfferBox: React.FC<OfferBoxModel> = ({ paintingSize, text, imageID, imageAlt, price }) => {
	const dispatch = useAppDispatch();

	return (
		<div className='offer__box dark-blue-gradient'>
			<ImageComponent imageID={imageID} imageAlt={imageAlt} />
			<p className='offer__box-text'>{text}</p>
			<p className='offer__box-special-text'>
				Wymiary obrazu: <br />
				<span>{paintingSize}</span>
			</p>
			<p className='offer__box-special-text'>
				Zakres cenowy: <br />
				<span>{price}zł</span>
			</p>
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
