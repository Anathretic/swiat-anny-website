import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useMediaQuery } from 'react-responsive';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import {
	getPopupSelectPaintingSizeInitialValue,
	resetSize,
} from '../redux/popupSelectPaintingSizeReduxSlice/popupSelectPaintingSizeSlice';
import { orderSchema } from '../schemas/schemas';
import { OrderInputs } from '../models/inputs.model';
import { OrderInput, OrderTextarea } from './littleComponents/OrderFormElements';

export const Order: React.FC = () => {
	const selectedSize = useAppSelector(getPopupSelectPaintingSizeInitialValue);
	const disptach = useAppDispatch();
	const navigate = useNavigate();

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

	const {
		register,
		handleSubmit,
		// reset,
		formState: { errors },
	} = useForm<OrderInputs>({
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

	useEffect(() => {
		if (selectedSize === '') {
			navigate('/');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSubmit: SubmitHandler<OrderInputs> = ({ firstName, secondName, email, phone, size, message }) => {
		console.log(firstName, secondName, email, phone, size, message);
	};

	return (
		<div className='order'>
			<div className='order__container'>
				<form className='order__form' onSubmit={handleSubmit(onSubmit)}>
					<h3 className='order__form-title'>Zamówienie</h3>
					<OrderInput
						label='Imię:'
						inputName='firstName'
						placeholder='Wprowadź imię..'
						children={errors.firstName?.message}
						aria-invalid={errors.firstName ? true : false}
						{...register('firstName')}
					/>
					<OrderInput
						label='Nazwisko:'
						inputName='secondName'
						placeholder='Wprowadź nazwisko..'
						children={errors.secondName?.message}
						aria-invalid={errors.secondName ? true : false}
						{...register('secondName')}
					/>
					<OrderInput
						label='E-mail:'
						inputName='email'
						placeholder='Wprowadź e-mail..'
						children={errors.email?.message}
						aria-invalid={errors.email ? true : false}
						{...register('email')}
					/>
					<OrderInput
						label='Nr telefonu:'
						inputName='phone'
						placeholder='Wprowadź numer telefonu..'
						children={errors.phone?.message}
						aria-invalid={errors.phone ? true : false}
						{...register('phone')}
					/>
					<OrderInput
						label='Rozmiar:'
						inputName='size'
						children={errors.size?.message}
						aria-invalid={errors.size ? true : false}
						value={selectedSize}
						readOnly={true}
						{...register('size')}
					/>
					<OrderTextarea
						label='Wiadomość:'
						inputName='message'
						placeholder='Wprowadź wiadomość..'
						children={errors.message?.message}
						aria-invalid={errors.message ? true : false}
						{...register('message')}
					/>
					<div className='order__form-box'>
						<ReCAPTCHA
							key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
							size={isMobile ? 'compact' : 'normal'}
							sitekey={import.meta.env.VITE_SITE_KEY}
							ref={refCaptcha}
						/>
						<div className='order__form-error'>{/* <p>{errorValue}</p> */}</div>
					</div>
					<div className='order__form-box'>
						<button className='order__form-submit-button' type='submit'>
							Wyślij
						</button>
						<button
							type='button'
							onClick={() => {
								disptach(resetSize());
								navigate(-1);
							}}>
							Cofnij
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
