import { OfferDataModel } from '../models/offer.model';
import Image from '../images/test-image.jpg';

export const offerData: Array<OfferDataModel> = [
	{
		id: 1,
		title: 'Mały!',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias doloribus autem expedita nobis rem in officia id? Debitis, asperiores modi. Ad sed cupiditate cum ut atque inventore repellendus quia!',
		firstSrc: Image,
		secondSrc: Image,
		firstAlt: 'To jest testowy obraz!',
		secondAlt: 'To jest testowy obraz!',
		paintingSize: 'Mały',
	},
	{
		id: 2,
		title: 'Średni!',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias doloribus autem expedita nobis rem in officia id? Debitis, asperiores modi. Ad sed cupiditate cum ut atque inventore repellendus quia!',
		firstSrc: Image,
		secondSrc: Image,
		firstAlt: 'To jest testowy obraz!',
		secondAlt: 'To jest testowy obraz!',
		paintingSize: 'Średni',
	},
	{
		id: 3,
		title: 'Duży!',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias doloribus autem expedita nobis rem in officia id? Debitis, asperiores modi. Ad sed cupiditate cum ut atque inventore repellendus quia!',
		firstSrc: Image,
		secondSrc: Image,
		firstAlt: 'To jest testowy obraz!',
		secondAlt: 'To jest testowy obraz!',
		paintingSize: 'Duży',
	},
];
