import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormCloseButton, FormInput, FormLoader, FormTextarea } from './components/FormElements';
import { useAppDispatch } from '../../hooks/reduxHooks.ts';
import { resetSize } from '../../redux/paintingSizeReduxSlice/paintingSizeSlice.ts';
import { orderSchema } from '../../schemas/schemas';
import { OrderComponentModel, OrderFormModel } from '../../models/orderForm.model.ts';
import { scrollToTop } from '../../utils/scrollToTop.ts';

export const OrderForm: React.FC<OrderComponentModel> = ({
	isLoading,
	setIsLoading,
	errorValue,
	setErrorValue,
	buttonText,
	setButtonText,
	isMobile,
	refCaptcha,
	navigate,
	selectedSize,
}) => {
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

	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<OrderFormModel> = async ({ firstName, secondName, email, phone, size, message }) => {
		setIsLoading(true);
		setErrorValue('');
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
					setButtonText('Wysłane!');
					reset();
					setTimeout(() => {
						dispatch(resetSize());
						navigate('/');
						scrollToTop();
					}, 1500);
				})
				.catch(err => {
					setErrorValue('Coś poszło nie tak..');
					if (err instanceof Error) {
						console.log(`Twój error to: ${err.message}`);
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			setIsLoading(false);
			setErrorValue('Nie bądź 🤖!');
		}
	};

	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
			<h3 className='form__title'>Zamówienie</h3>
			<FormCloseButton
				path='/oferta'
				onClick={() => {
					dispatch(resetSize());
					scrollToTop();
				}}
			/>
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
					<FormLoader className='loader' />
				) : (
					<button className='form__button' type='submit'>
						{buttonText}
					</button>
				)}
			</div>
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
