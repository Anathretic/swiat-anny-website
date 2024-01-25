export interface OfferBoxModel {
	paintingSize: string;
	offerText: string;
	firstImage: {
		data: {
			attributes: {
				url: string;
			};
		};
	};
	secondImage: {
		data: {
			attributes: {
				url: string;
			};
		};
	};
	firstAlt: string;
	secondAlt: string;
}

export interface OfferData {
	id: number;
	attributes: OfferBoxModel;
}
