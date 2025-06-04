type Size = '20cm x 20cm' | '30cm x 24cm' | '40cm x 30cm';

export interface ContactFormModel {
	firstName: string;
	email: string;
	subject: string;
	message: string;
}

export interface OrderComponentModel {
	selectedSize: string;
}

export interface OrderFormModel {
	firstName: string;
	secondName: string;
	email: string;
	phone: string;
	size: Size;
	message: string;
}
