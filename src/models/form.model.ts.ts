type Size = '20cm x 20cm' | '30cm x 24cm' | '40cm x 30cm';

type DefaultFormModel = {
	firstName: string;
	secondName: string;
	email: string;
	subject: string;
	phone: string;
	size: Size;
	message: string;
};

export type ContactFormModel = Pick<DefaultFormModel, 'firstName' | 'email' | 'subject' | 'message'>;

export type OrderFormModel = Pick<
	DefaultFormModel,
	'firstName' | 'secondName' | 'email' | 'phone' | 'size' | 'message'
>;

export type OrderFormComponentModel = {
	selectedSize: string;
};
