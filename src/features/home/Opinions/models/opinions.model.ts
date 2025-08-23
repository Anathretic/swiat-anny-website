export type OpinionsItemModel = {
	id: string;
	title: string;
	opinion: string;
	name: string;
};

export type OpinionsDataModel = {
	id: number;
	node: OpinionsItemModel;
};
