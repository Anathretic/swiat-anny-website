import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { CarouselProps } from '../../models/carousel.model';

export const CarouselComponent: React.FC<CarouselProps> = ({
	firstImage,
	firstAlt,
	secondImage,
	secondAlt,
	...carouselProps
}) => {
	return (
		<Carousel
			className='carousel'
			autoPlay
			infiniteLoop
			showStatus={false}
			showThumbs={false}
			showArrows={false}
			interval={5000}
			{...carouselProps}>
			<div>
				<img src={firstImage} alt={firstAlt} className='carousel__item' />
			</div>
			<div>
				<img src={secondImage} alt={secondAlt} className='carousel__item' />
			</div>
		</Carousel>
	);
};
