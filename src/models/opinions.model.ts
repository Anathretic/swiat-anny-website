export interface OpinionsItemModel {
	id: string;
	title: string;
	opinion: string;
	name: string;
}

export interface OpinionsDataModel {
	id: number;
	node: OpinionsItemModel;
}
