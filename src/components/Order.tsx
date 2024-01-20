import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useMediaQuery } from 'react-responsive';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getPaintingSizeInitialValue, resetSize } from '../redux/paintingSizeReduxSlice/paintingSizeSlice';
import { orderSchema } from '../schemas/schemas';
import { OrderInputs } from '../models/inputs.model';
import { FormInput, FormTextarea } from './littleComponents/FormElements';
import { Loader } from './littleComponents/Loader';
import { useContactFormButton } from '../hooks/useContactFormButton';
import { scrollToTop } from '../utils/scrollToTop';

export const Order: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');

	const [buttonText, setButtonText] = useContactFormButton();

	const selectedSize = useAppSelector(getPaintingSizeInitialValue);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

	const {
		register,
		reset,
		handleSubmit,
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

	const onSubmit: SubmitHandler<OrderInputs> = async ({ firstName, secondName, email, phone, size, message }) => {
		setIsLoading(true);
		setErrorValue('');
		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
			secondName: secondName.charAt(0).toUpperCase() + secondName.slice(1),
			email,
			phone,
			size,
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			console.log(params);
			setButtonText('Wysłane!');
			setIsLoading(false);
			dispatch(resetSize());
			reset();
			setTimeout(() => {
				navigate('/');
				scrollToTop();
			}, 2500);
		}
	};

	return (
		<div className='order'>
			<div className='order__container dark-blue-gradient'>
				<form className='form' onSubmit={handleSubmit(onSubmit)}>
					<h3 className='form__title'>Zamówienie</h3>
					<hr className='form__strap' />
					<FormInput
						label='Imię:'
						inputName='firstName'
						placeholder='Wprowadź imię..'
						children={errors.firstName?.message}
						aria-invalid={errors.firstName ? true : false}
						{...register('firstName')}
					/>
					<FormInput
						label='Nazwisko:'
						inputName='secondName'
						placeholder='Wprowadź nazwisko..'
						children={errors.secondName?.message}
						aria-invalid={errors.secondName ? true : false}
						{...register('secondName')}
					/>
					<FormInput
						label='E-mail:'
						inputName='email'
						placeholder='Wprowadź e-mail..'
						children={errors.email?.message}
						aria-invalid={errors.email ? true : false}
						{...register('email')}
					/>
					<FormInput
						label='Nr telefonu:'
						inputName='phone'
						placeholder='Wprowadź numer telefonu..'
						children={errors.phone?.message}
						aria-invalid={errors.phone ? true : false}
						{...register('phone')}
					/>
					<FormInput
						label='Rozmiar:'
						inputName='size'
						placeholder='Wprowadź rozmiar..'
						children={errors.size?.message}
						aria-invalid={errors.size ? true : false}
						value={selectedSize}
						readOnly={true}
						{...register('size')}
					/>
					<FormTextarea
						label='Wiadomość:'
						inputName='message'
						placeholder='Opisz jak widzisz swoją kompozycję..'
						children={errors.message?.message}
						aria-invalid={errors.message ? true : false}
						{...register('message')}
					/>
					<div className='form__box'>
						<ReCAPTCHA
							key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
							size={isMobile ? 'compact' : 'normal'}
							sitekey={import.meta.env.VITE_SITE_KEY}
							ref={refCaptcha}
						/>
						<div className='form__error'>
							<p>{errorValue}</p>
						</div>
					</div>
					<hr className='form__strap' />
					<div className='form__box'>
						{isLoading ? (
							<Loader />
						) : (
							<button className='form__button' type='submit'>
								{buttonText}
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};
