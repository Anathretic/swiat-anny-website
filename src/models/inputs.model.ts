type Size = '20cm x 20cm' | '30cm x 24cm' | '40cm x 30cm';

export interface ContactInputs {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export interface OrderInputs {
	firstName: string;
	secondName: string;
	email: string;
	phone: string;
	size: Size;
	message: string;
}
