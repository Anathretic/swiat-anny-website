import ReCAPTCHA from 'react-google-recaptcha';
import { UseFormReset } from 'react-hook-form';

type Size = '20cm x 20cm' | '30cm x 24cm' | '40cm x 30cm';

// ---------------------useFormSubmits-----------------------

export type FormTypes = ContactFormModel | OrderFormModel;

export interface UseFormSubmitsModel<T extends FormTypes> {
	reset: UseFormReset<T>;
	refCaptcha?: React.RefObject<ReCAPTCHA>;
}

// ----------------------------------------------------------

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
