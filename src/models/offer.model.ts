export interface OfferImage {
	image: string;
	imageAlt: string;
}

export interface OfferBoxModel {
	paintingSize: string;
	offerText: string;
	image: {
		data: {
			attributes: {
				url: string;
			};
		};
	};
	imageAlt: string;
}

export interface OfferData {
	id: number;
	attributes: OfferBoxModel;
}
