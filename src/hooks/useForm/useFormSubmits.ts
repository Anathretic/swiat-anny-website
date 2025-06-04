import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { useFormHandlers } from './useFormHandlers.ts';
import { useAppDispatch } from '../reduxHooks.ts';
import { resetSize } from '../../redux/paintingSizeReduxSlice/paintingSizeSlice.ts';
import { scrollToTop } from '../../utils/scrollToTop.ts';
import { ContactFormModel, OrderFormModel } from '../../models/form.model.ts.ts';
import { FormTypes, UseFormSubmitsModel } from '../../models/useFormHooks.model.ts';

export const useFormSubmits = <T extends FormTypes>({ reset, refCaptcha }: UseFormSubmitsModel<T>) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { handleReCaptcha, handleEmailJs, handleErrors } = useFormHandlers();

	const contactSubmit: SubmitHandler<ContactFormModel> = async ({ firstName, email, subject, message }) => {
		const token = handleReCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

		const params = {
			name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
			email,
			subject: subject.charAt(0).toUpperCase() + subject.slice(1),
			message,
			'g-recaptcha-response': token,
		};

		await handleEmailJs({
			serviceID: `${import.meta.env.VITE_SERVICE_ID}`,
			templateID: `${import.meta.env.VITE_CONTACT_TEMPLATE_ID}`,
			params,
			publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
			reset,
			additionalActions: [],
		});
	};

	const orderSubmit: SubmitHandler<OrderFormModel> = async ({ firstName, secondName, email, phone, size, message }) => {
		const token = handleReCaptcha(refCaptcha);

		if (!token) {
			handleErrors();
			return;
		}

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

		await handleEmailJs({
			serviceID: `${import.meta.env.VITE_SERVICE_ID}`,
			templateID: `${import.meta.env.VITE_ORDER_TEMPLATE_ID}`,
			params,
			publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
			reset,
			additionalActions: [
				() => {
					setTimeout(() => {
						dispatch(resetSize());
						navigate('/');
						scrollToTop();
					}, 2500);
				},
			],
		});
	};

	return { contactSubmit, orderSubmit };
};
