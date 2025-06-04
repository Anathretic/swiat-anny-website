import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { useAppDispatch } from '../reduxHooks';
import {
	setButtonText,
	setErrorValue,
	setIsLoading,
} from '../../redux/contactAndOrderFormReduxSlice/contactAndOrderFormSlice';
import { HandleEmailJsModel } from '../../models/useFormHooks.model';

export const useFormHandlers = () => {
	const dispatch = useAppDispatch();

	const handleReCaptcha = (refCaptcha: React.RefObject<ReCAPTCHA> | undefined) => {
		dispatch(setIsLoading(true));
		dispatch(setErrorValue(''));

		if (!refCaptcha) return;

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		return token;
	};

	const handleEmailJs = async ({
		serviceID,
		templateID,
		params,
		publicKey,
		reset,
		additionalActions,
	}: HandleEmailJsModel) => {
		await emailjs
			.send(serviceID, templateID, params, publicKey)
			.then(() => {
				dispatch(setButtonText('Wysłane!'));
				reset();
				additionalActions!.forEach(fn => fn());
			})
			.catch(err => {
				dispatch(setErrorValue('Coś poszło nie tak..'));
				if (err instanceof Error) {
					console.error(`Twój błąd to: ${err.message}`);
				}
			})
			.finally(() => {
				dispatch(setIsLoading(false));
			});
	};

	const handleErrors = () => {
		dispatch(setIsLoading(false));
		dispatch(setErrorValue('Nie bądź 🤖!'));
	};

	return { handleReCaptcha, handleEmailJs, handleErrors };
};
