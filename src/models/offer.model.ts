export interface OfferBoxModel {
	paintingSize: string;
	text: string;
	imageType: string;
	price: string;
	delay: string;
}

export interface OfferData {
	id: number;
	node: OfferBoxModel;
}
