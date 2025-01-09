import ReCAPTCHA from 'react-google-recaptcha';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';
import { ContactFormModel } from './contactForm.model';
import { OrderFormModel } from './orderForm.model.ts';

type Form = ContactFormModel | OrderFormModel;
type ErrorMessage = string | FieldError | Merge<FieldError, FieldErrorsImpl<Form>> | undefined;

export interface InputAndTextareaModel {
	label: string;
	inputName: string;
	errorMessage: ErrorMessage;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
}

export interface InputConfigModel {
	label: string;
	inputName: string;
	placeholder: string;
	errorMessage: string | undefined;
	isInvalid: boolean;
	register: ReturnType<UseFormRegister<Form>>;
}

export interface RecaptchaV2Model {
	isMobile: boolean;
	refCaptcha: React.RefObject<ReCAPTCHA>;
	errorValue: string;
}

export interface SubmitModel {
	isLoading: boolean;
	buttonText: string;
}

export interface CloseButtonModel {
	path: string;
	onClick: React.MouseEventHandler<HTMLAnchorElement>;
}
