import { OfferImage } from '../../models/offer.model';

export const ImageComponent: React.FC<OfferImage> = ({ imageID, imageAlt }) => {
	return (
		<div className='image-component'>
			<img src={`https://lh3.googleusercontent.com/pw/${imageID}`} alt={imageAlt} className='image-component__item' />
		</div>
	);
};
