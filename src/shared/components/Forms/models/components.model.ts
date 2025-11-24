import ReCAPTCHA from 'react-google-recaptcha';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { ContactFormModel, OrderFormModel } from './forms.model.ts';

type Form = ContactFormModel | OrderFormModel;
type ErrorMessage = string | FieldError | Merge<FieldError, FieldErrorsImpl<Form>> | undefined;

type DefaultInputModel = {
	label: string;
	inputName: string;
	selectName: string;
	selectedSize: string;
	errorMessage: ErrorMessage;
	placeholder?: string;
};

export type InputAndTextareaModel = Pick<DefaultInputModel, 'label' | 'inputName' | 'errorMessage' | 'placeholder'>;

export type SelectModel = Pick<DefaultInputModel, 'label' | 'selectName' | 'selectedSize' | 'errorMessage'>;

export interface CheckboxModel extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	inputName: string;
	errorMessage: ErrorMessage;
}

export type ReCaptchaV2Model = {
	refCaptcha: React.RefObject<ReCAPTCHA>;
};

export type ReturnButtonModel = {
	path: string;
};
