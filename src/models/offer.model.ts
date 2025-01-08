export interface OfferBoxModel {
	paintingSize: string;
	text: string;
	imageType: string;
	price: string;
	delay: string;
}

export interface OfferDataModel {
	id: number;
	node: OfferBoxModel;
}
