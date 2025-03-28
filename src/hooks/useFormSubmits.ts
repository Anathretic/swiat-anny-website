import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useAppDispatch } from './reduxHooks.ts';
import {
	setButtonText,
	setErrorValue,
	setIsLoading,
} from '../redux/contactAndOrderFormReduxSlice/contactAndOrderFormSlice.ts';
import { resetSize } from '../redux/paintingSizeReduxSlice/paintingSizeSlice.ts';
import { scrollToTop } from '../utils/scrollToTop.ts';
import { ContactFormModel, FormTypes, OrderFormModel, UseFormSubmitsModel } from '../models/form.model.ts';

export const useFormSubmits = <T extends FormTypes>({ reset, refCaptcha }: UseFormSubmitsModel<T>) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const contactSubmit: SubmitHandler<ContactFormModel> = async ({ firstName, email, subject, message }) => {
		dispatch(setIsLoading(true));
		dispatch(setErrorValue(''));

		if (!refCaptcha) return;

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
			email,
			subject: subject.charAt(0).toUpperCase() + subject.slice(1),
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_CONTACT_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(() => {
					dispatch(setButtonText('Wysłane!'));
					reset();
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
		} else {
			dispatch(setIsLoading(false));
			dispatch(setErrorValue('Nie bądź 🤖!'));
		}
	};

	const orderSubmit: SubmitHandler<OrderFormModel> = async ({ firstName, secondName, email, phone, size, message }) => {
		dispatch(setIsLoading(true));
		dispatch(setErrorValue(''));

		if (!refCaptcha) return;

		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const orderID = Math.floor(Math.random() * 1000000000);

		const params = {
			firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
			secondName: secondName.charAt(0).toUpperCase() + secondName.slice(1),
			email,
			phone,
			size,
			message,
			orderID,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_ORDER_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(() => {
					dispatch(setButtonText('Wysłane!'));
					reset();
					setTimeout(() => {
						dispatch(resetSize());
						navigate('/');
						scrollToTop();
					}, 2500);
				})
				.catch(err => {
					dispatch(setErrorValue('Coś poszło nie tak..'));
					if (err instanceof Error) {
						console.log(`Twój error to: ${err.message}`);
					}
				})
				.finally(() => {
					dispatch(setIsLoading(false));
				});
		} else {
			dispatch(setIsLoading(false));
			dispatch(setErrorValue('Nie bądź 🤖!'));
		}
	};

	return { contactSubmit, orderSubmit };
};
