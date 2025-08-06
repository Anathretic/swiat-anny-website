import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	FormInput,
	FormRecaptchaV2,
	FormSubmit,
	FormTextarea,
	ReturnButton,
	SelectElement,
} from './components/FormElements';
import { useAppDispatch } from '../../hooks/reduxHooks.ts';
import { setErrorValue } from '../../redux/contactAndOrderFormReduxSlice/contactAndOrderFormSlice.ts';
import { orderFormInputs } from './config/formsConfig.ts';
import { orderSchema } from '../../schemas/schemas';
import { OrderFormComponentModel, OrderFormModel } from '../../models/form.model.ts';
import { scrollToTop } from '../../utils/scrollToTop.ts';
import { useFormSubmits } from '../../hooks/useForm/useFormSubmits.ts';

export const OrderForm: React.FC<OrderFormComponentModel> = ({ selectedSize }) => {
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

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const { orderSubmit } = useFormSubmits<OrderFormModel>({ reset, refCaptcha });
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (refCaptcha.current?.getValue() === '') {
			dispatch(setErrorValue(''));
		}
	}, [dispatch]);

	return (
		<form className='form' onSubmit={handleSubmit(orderSubmit)}>
			<h3 className='form__title'>Zamówienie</h3>
			<hr className='form__strap' />
			{orderFormInputs.map((input, id) => {
				const error = errors[input.inputName];
				return (
					<FormInput
						key={id}
						label={input.label}
						inputName={input.inputName}
						placeholder={input.placeholder}
						errorMessage={error?.message as string}
						aria-invalid={!!error}
						{...register(input.inputName)}
					/>
				);
			})}
			<SelectElement
				label='Rozmiar:'
				selectName='size'
				selectedSize={selectedSize}
				errorMessage={errors.size?.message}
				aria-invalid={errors.size ? true : false}
				{...register('size')}
			/>
			<FormTextarea
				label='Wiadomość:'
				inputName='message'
				placeholder='Opisz jak widzisz swoją kompozycję'
				errorMessage={errors.message?.message}
				aria-invalid={errors.message ? true : false}
				{...register('message')}
			/>
			<FormRecaptchaV2 refCaptcha={refCaptcha} />
			<hr className='form__strap' />
			<FormSubmit />
			<ReturnButton path='/' />
			<div className='form__box'>
				<p className='form__special-text'>
					Poprzez kliknięcie przycisku "Wyślij" akceptujesz{' '}
					<Link to='/regulamin' onClick={scrollToTop}>
						regulamin
					</Link>{' '}
					oraz wyrażasz zgodę na realizację zamówienia. W przypadku, gdy rozmiar ma być inny proszę o wiadomość przez
					formularz kontaktowy.
				</p>
			</div>
		</form>
	);
};
