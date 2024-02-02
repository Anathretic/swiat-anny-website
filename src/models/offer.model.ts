export interface OfferImage {
	imageID: string;
	imageAlt: string;
}

export interface OfferBoxModel {
	paintingSize: string;
	text: string;
	imageID: string;
	imageAlt: string;
}

export interface OfferData {
	id: number;
	node: OfferBoxModel;
}
