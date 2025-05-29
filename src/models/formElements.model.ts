import ReCAPTCHA from 'react-google-recaptcha';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';
import { ContactFormModel, OrderFormModel } from './form.model.ts.ts';

type Form = ContactFormModel | OrderFormModel;
type ErrorMessage = string | FieldError | Merge<FieldError, FieldErrorsImpl<Form>> | undefined;

export interface InputAndTextareaModel {
	label: string;
	inputName: string;
	errorMessage: ErrorMessage;
	placeholder?: string;
}

export interface SelectModel {
	label: string;
	selectName: string;
	selectedSize: string;
	errorMessage: ErrorMessage;
}

export interface InputConfigModel {
	label: string;
	inputName: string;
	placeholder: string;
	errorMessage: string | undefined;
	isInvalid: boolean;
	register: ReturnType<UseFormRegister<Form>>;
}

export interface ReCaptchaV2Model {
	refCaptcha: React.RefObject<ReCAPTCHA>;
}

export interface ReturnButtonModel {
	path: string;
}
