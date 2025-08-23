type OrderModel = {
	orderID: number;
	firstName: string;
	secondName: string;
	email: string;
	phone: string;
	size: string;
	message: string;
	created_at?: string;
};

export type SendOrderModel = {
	order: OrderModel;
};
