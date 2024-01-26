import { OfferImage } from '../../models/offer.model';

export const ImageComponent: React.FC<OfferImage> = ({ image, imageAlt }) => {
	return (
		<div className='image-component'>
			<img src={image} alt={imageAlt} className='image-component__item' />
		</div>
	);
};
