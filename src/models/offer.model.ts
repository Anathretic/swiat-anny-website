export type OfferBoxModel = {
	paintingSize: string;
	text: string;
	imageType: string;
	price: string;
	delay: string;
};

export type OfferDataModel = {
	id: number;
	node: OfferBoxModel;
};
