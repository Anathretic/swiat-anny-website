import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { setSize } from '../../../redux/paintingSizeReduxSlice/paintingSizeSlice';
import { OfferBoxModel } from '../../../models/offer.model';
import { scrollToTop } from '../../../utils/scrollToTop';

import { GiButterfly } from 'react-icons/gi';

export const OfferBox: React.FC<OfferBoxModel> = ({ paintingSize, text, imageType, price, delay }) => {
	const dispatch = useAppDispatch();

	return (
		<div className='offer__box dark-blue-gradient'>
			<p className='offer__box-image-type'>
				<span className='offer__box-image-type-text' style={{ animationDelay: `${delay}s` }}>
					{imageType}
				</span>
			</p>
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
				onClick={e => {
					scrollToTop(e);
					dispatch(setSize(paintingSize));
				}}>
				Wybierz
			</Link>
			<GiButterfly className={`offer__box-special-icon offer__box-special-icon--${imageType}`} />
			{imageType === 'm' && (
				<GiButterfly className={`offer__box-special-icon offer__box-special-icon--${imageType}-second`} />
			)}
		</div>
	);
};
