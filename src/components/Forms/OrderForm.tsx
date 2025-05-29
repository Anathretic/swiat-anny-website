import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput, FormRecaptchaV2, FormSubmit, FormTextarea, ReturnButton } from './components/FormElements';
import { orderFormInputsConfig } from './inputsConfig/inputsConfig.ts';
import { useAppDispatch } from '../../hooks/reduxHooks.ts';
import { setErrorValue } from '../../redux/contactAndOrderFormReduxSlice/contactAndOrderFormSlice.ts';
import { orderSchema } from '../../schemas/schemas';
import { OrderComponentModel, OrderFormModel } from '../../models/form.model.ts.ts';
import { scrollToTop } from '../../utils/scrollToTop.ts';
import { useFormSubmits } from '../../hooks/useFormSubmits.ts';

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

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const { orderSubmit } = useFormSubmits<OrderFormModel>({ reset, refCaptcha });
	const orderFormInputs = orderFormInputsConfig(errors, register);
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
			<ReturnButton path='/' />
			<div className='form__box'>
				<p className='form__special-text'>
					Poprzez kliknięcie przycisku akceptujesz{' '}
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
