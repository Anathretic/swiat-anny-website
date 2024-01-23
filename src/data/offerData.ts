import { OfferDataModel } from '../models/offer.model';
import Image from '../images/test-image.jpg';

export const offerData: Array<OfferDataModel> = [
	{
		id: 1,
		paintingSize: '20cm x 20cm',
		text: 'Małe cuda w formie! Nasze urocze obrazy fluid art to połączenie precyzji i ekspresji. Każdy detal emanuje intensywnością, tworząc dzieła sztuki pełne magii i delikatności.',
		firstSrc: Image,
		secondSrc: Image,
		firstAlt: 'To jest testowy obraz!',
		secondAlt: 'To jest testowy obraz!',
	},
	{
		id: 2,
		paintingSize: '30cm x 24cm',
		text: 'Średni format, ogromna ekspresja. Obrazy o "średnich" wymiarach w technice fluid art to harmonia kształtów i kolorów. Każdy szczegół to fascynujący taniec abstrakcji na płótnie.',
		firstSrc: Image,
		secondSrc: Image,
		firstAlt: 'To jest testowy obraz!',
		secondAlt: 'To jest testowy obraz!',
	},
	{
		id: 3,
		paintingSize: '40cm x 30cm',
		text: 'Wielkość robi różnicę! Ogromne dzieła o wymiarach 40 x 30cm to majstersztyki fluid art. Eksplozja barw, swobodne formy i oryginalność, której nie sposób przejść obojętnie.',
		firstSrc: Image,
		secondSrc: Image,
		firstAlt: 'To jest testowy obraz!',
		secondAlt: 'To jest testowy obraz!',
	},
];
