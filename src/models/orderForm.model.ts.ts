import ReCAPTCHA from 'react-google-recaptcha';
import { NavigateFunction } from 'react-router-dom';

type Size = '20cm x 20cm' | '30cm x 24cm' | '40cm x 30cm';

export interface OrderComponentModel {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	errorValue: string;
	setErrorValue: React.Dispatch<React.SetStateAction<string>>;
	buttonText: string;
	setButtonText: React.Dispatch<React.SetStateAction<string>>;
	isMobile: boolean;
	refCaptcha: React.RefObject<ReCAPTCHA>;
	navigate: NavigateFunction;
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
