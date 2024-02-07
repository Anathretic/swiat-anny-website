import { OfferImage } from '../../models/offer.model';
import smallImage from '../../images/offerImages/small.jpg';
import mediumImage from '../../images/offerImages/medium.jpg';
import largeImage from '../../images/offerImages/large.jpg';

export const ImageComponent: React.FC<OfferImage> = ({ imageID, imageAlt }) => {
	const selectedImage = (imageID: string) => {
		if (imageID === 'small') return smallImage;
		if (imageID === 'medium') return mediumImage;
		if (imageID === 'large') return largeImage;
	};

	return (
		<div className='image-component'>
			<img src={selectedImage(imageID)} alt={imageAlt} className='image-component__item' />
		</div>
	);
};
