import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	CheckboxElement,
	FormInput,
	FormRecaptchaV2,
	FormSubmit,
	FormTextarea,
	ReturnButton,
	SelectElement,
} from '../../../shared/components/Forms/components/FormElements.tsx';
import { useAppDispatch } from '../../../shared/hooks/reduxHooks.ts';
import { setErrorValue } from '../../../shared/redux/sharedSlices/contactAndOrderFormSlice.ts';
import { orderFormInputs } from '../config/formConfig.ts';
import { orderSchema } from '../../../shared/schemas/schemas.ts';
import { OrderFormComponentModel, OrderFormModel } from '../../../shared/components/Forms/models/forms.model.ts';
import { scrollToTop } from '../../../shared/utils/scrollToTop.ts';
import { useFormSubmits } from '../../../shared/components/Forms/hooks/useFormSubmits.ts';

import * as yup from 'yup';

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
			privacyPolicy: false,
		},
		resolver: yupResolver(orderSchema as yup.ObjectSchema<OrderFormModel>),
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
			<h1 className='form__title'>Złóż zamówienie</h1>
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
			<CheckboxElement
				label='Wyrażam zgodę na przetwarzanie moich danych zgodnie z obowiązującym '
				inputName='privacyPolicy'
				{...register('privacyPolicy')}
				errorMessage={errors.privacyPolicy?.message}
			/>
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
