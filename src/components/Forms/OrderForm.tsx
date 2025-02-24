import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormCloseButton, FormInput, FormRecaptchaV2, FormSubmit, FormTextarea } from './components/FormElements';
import { orderFormInputsConfig } from './inputsConfig/inputsConfig.ts';
import { useAppDispatch } from '../../hooks/reduxHooks.ts';
import {
	setButtonText,
	setErrorValue,
	setIsLoading,
} from '../../redux/contactAndOrderFormReduxSlice/contactAndOrderFormSlice.ts';
import { resetSize } from '../../redux/paintingSizeReduxSlice/paintingSizeSlice.ts';
import { orderSchema } from '../../schemas/schemas';
import { OrderComponentModel, OrderFormModel } from '../../models/orderForm.model.ts';
import { scrollToTop } from '../../utils/scrollToTop.ts';

export const OrderForm: React.FC<OrderComponentModel> = ({ selectedSize }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<OrderFormModel>({
		defaultValues: {
			firstName: '',
			secondName: '',
			email: '',
			phone: '',
			size: undefined,
			message: '',
		},
		resolver: yupResolver(orderSchema),
	});

	const navigate = useNavigate();
	const refCaptcha = useRef<ReCAPTCHA>(null);
	const dispatch = useAppDispatch();
	const orderFormInputs = orderFormInputsConfig(errors, register);

	const onSubmit: SubmitHandler<OrderFormModel> = async ({ firstName, secondName, email, phone, size, message }) => {
		dispatch(setIsLoading(true));
		dispatch(setErrorValue(''));
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

	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
			<h3 className='form__title'>Zamówienie</h3>
			<FormCloseButton path='/oferta' />
			<hr className='form__strap' />
			{orderFormInputs.map((input, id) => (
				<FormInput
					key={id}
					label={input.label}
					inputName={input.inputName}
					placeholder={input.placeholder}
					errorMessage={input.errorMessage}
					aria-invalid={input.isInvalid}
					value={input.inputName === 'size' ? selectedSize : undefined}
					readOnly={input.inputName === 'size' && true}
					{...input.register}
				/>
			))}
			<FormTextarea
				label='Wiadomość:'
				inputName='message'
				placeholder='Opisz jak widzisz swoją kompozycję..'
				errorMessage={errors.message?.message}
				aria-invalid={errors.message ? true : false}
				{...register('message')}
			/>
			<FormRecaptchaV2 refCaptcha={refCaptcha} />
			<hr className='form__strap' />
			<FormSubmit />
			<div className='form__box'>
				<p className='form__special-text'>
					Poprzez kliknięcie przycisku akceptujesz{' '}
					<Link to='/regulamin' onClick={scrollToTop}>
						regulamin
					</Link>{' '}
					oraz wyrażasz zgodę na realizację zamówienia. W przypadku, gdy rozmiar ma być inny proszę o wiadomość przez{' '}
					<Link to='/kontakt' onClick={scrollToTop}>
						formularz kontaktowy.
					</Link>
				</p>
			</div>
		</form>
	);
};
