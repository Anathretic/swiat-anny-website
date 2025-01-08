import ReCAPTCHA from 'react-google-recaptcha';

export interface ContactComponentModel {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	errorValue: string;
	setErrorValue: React.Dispatch<React.SetStateAction<string>>;
	buttonText: string;
	setButtonText: React.Dispatch<React.SetStateAction<string>>;
	isMobile: boolean;
	refCaptcha: React.RefObject<ReCAPTCHA>;
}

export interface ContactFormModel {
	firstName: string;
	email: string;
	subject: string;
	message: string;
}
