type Size = 'S' | 'M' | 'L';

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
