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
					<div className='order__form-box'>
						<label className='order__form-label' htmlFor='firstName'>
							Imię:
						</label>
						<input
							aria-invalid={errors.firstName ? true : false}
							className='order__form-input'
							type='text'
							id='firstName'
							placeholder='Wprowadź imię..'
							autoComplete='off'
							{...register('firstName')}
						/>
						<p className='order__form-input-error'>{errors.firstName?.message}</p>
					</div>
					<div className='order__form-box'>
						<label className='order__form-label' htmlFor='secondName'>
							Nazwisko:
						</label>
						<input
							aria-invalid={errors.secondName ? true : false}
							className='order__form-input'
							type='text'
							id='secondName'
							placeholder='Wprowadź nazwisko..'
							autoComplete='off'
							{...register('secondName')}
						/>
						<p className='order__form-input-error'>{errors.secondName?.message}</p>
					</div>
					<div className='order__form-box'>
						<label className='order__form-label' htmlFor='email'>
							E-mail:
						</label>
						<input
							aria-invalid={errors.email ? true : false}
							className='order__form-input'
							type='text'
							id='email'
							placeholder='Wprowadź adres e-mail..'
							autoComplete='off'
							{...register('email')}
						/>
						<p className='order__form-input-error'>{errors.email?.message}</p>
					</div>
					<div className='order__form-box'>
						<label className='order__form-label' htmlFor='phone'>
							Nr telefonu:
						</label>
						<input
							aria-invalid={errors.phone ? true : false}
							className='order__form-input'
							type='text'
							id='phone'
							placeholder='Wprowadź numer telefonu..'
							autoComplete='off'
							{...register('phone')}
						/>
						<p className='order__form-input-error'>{errors.phone?.message}</p>
					</div>
					<div className='order__form-box'>
						<label className='order__form-label' htmlFor='size'>
							Rozmiar:
						</label>
						<select
							aria-invalid={errors.size ? true : false}
							className='order__form-select'
							id='size'
							value={selectedSize}
							{...register('size')}>
							<option value='S'>Mały</option>
							<option value='M'>Średni</option>
							<option value='L'>Duży</option>
						</select>
						<p className='order__form-input-error'>{errors.size?.message}</p>
					</div>
					<div className='order__form-box'>
						<label className='order__form-label' htmlFor='message'>
							Wiadomość:
						</label>
						<textarea
							aria-invalid={errors.message ? true : false}
							className='order__form-textarea'
							id='message'
							placeholder='Wprowadź wiadomość..'
							autoComplete='off'
							{...register('message')}></textarea>
						<p className='order__form-input-error'>{errors.message?.message}</p>
					</div>
					<div className='order__form-box'>
						<ReCAPTCHA
							key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
							size={isMobile ? 'compact' : 'normal'}
							sitekey={import.meta.env.VITE_SITE_KEY}
							ref={refCaptcha}
						/>
						<div className='order__form-error'>{/* <p>{errorValue}</p> */}</div>
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
					</div>
				</form>
			</div>
		</div>
	);
};
