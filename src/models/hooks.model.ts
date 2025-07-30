import { UseFormReset } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { ContactFormModel, OrderFormModel } from './form.model.ts.ts';

export type FormTypes = ContactFormModel | OrderFormModel;

export type UseFormSubmitsModel<T extends FormTypes> = {
	reset: UseFormReset<T>;
	refCaptcha?: React.RefObject<ReCAPTCHA>;
};

export type HandleEmailJsModel = {
	serviceID: string;
	templateID: string;
	params: Record<string, unknown>;
	publicKey: string;
	reset: () => void;
	additionalActions: (() => void)[];
};
