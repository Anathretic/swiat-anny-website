import { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { contactSchema } from '../schemas/schemas';
import { ContactInputs } from '../models/inputs.model';
import { Loader } from './littleComponents/Loader';
import { useContactFormButton } from '../hooks/useContactFormButton';

export const Contact: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');

	const [buttonText, setButtonText] = useContactFormButton();

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactInputs>({
		defaultValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
		resolver: yupResolver(contactSchema),
	});

	const onSubmit: SubmitHandler<ContactInputs> = async ({ name, email, subject, message }) => {
		setIsLoading(true);
		setErrorValue('');
		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			name,
			email,
			subject,
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_TEMPLATE_ID}`,
					params,
					`${import.meta.env.VITE_PUBLIC_KEY}`
				)
				.then(() => {
					setButtonText('Wysłane!');
					reset();
				})
				.catch(err => {
					setErrorValue('Something went wrong..');
					if (err instanceof Error) {
						console.log(`Your error is here: ${err.message}`);
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
		<div className='contact'>
			<div className='contact__container dark-blue-gradient'>
				<form className='contact__form' onSubmit={handleSubmit(onSubmit)}>
					<h3 className='contact__form-title'>Zapytaj mnie!</h3>
					<hr className='contact__form-strap' />
					<div className='contact__form-box'>
						<label className='contact__form-label' htmlFor='name'>
							Imię:
						</label>
						<input
							aria-invalid={errors.name ? true : false}
							className='contact__form-input'
							type='text'
							id='name'
							placeholder='Wprowadź imię..'
							autoComplete='off'
							{...register('name')}
						/>
						<p className='contact__form-input-error'>{errors.name?.message}</p>
					</div>
					<div className='contact__form-box'>
						<label className='contact__form-label' htmlFor='email'>
							E-mail:
						</label>
						<input
							aria-invalid={errors.email ? true : false}
							className='contact__form-input'
							type='text'
							id='email'
							placeholder='Wprowadź adres e-mail..'
							autoComplete='off'
							{...register('email')}
						/>
						<p className='contact__form-input-error'>{errors.email?.message}</p>
					</div>
					<div className='contact__form-box'>
						<label className='contact__form-label' htmlFor='subject'>
							Temat:
						</label>
						<input
							aria-invalid={errors.subject ? true : false}
							className='contact__form-input'
							type='text'
							id='subject'
							placeholder='Wprowadź temat wiadomości..'
							autoComplete='off'
							{...register('subject')}
						/>
						<p className='contact__form-input-error'>{errors.subject?.message}</p>
					</div>
					<div className='contact__form-box'>
						<label className='contact__form-label' htmlFor='message'>
							Wiadomość:
						</label>
						<textarea
							aria-invalid={errors.message ? true : false}
							className='contact__form-textarea'
							id='message'
							placeholder='Wprowadź wiadomość..'
							autoComplete='off'
							{...register('message')}></textarea>
						<p className='contact__form-input-error'>{errors.message?.message}</p>
					</div>
					<div className='contact__form-box'>
						<ReCAPTCHA
							key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
							size={isMobile ? 'compact' : 'normal'}
							sitekey={import.meta.env.VITE_SITE_KEY}
							ref={refCaptcha}
						/>
						<div className='contact__form-error'>
							<p>{errorValue}</p>
						</div>
					</div>
					<hr className='contact__form-strap' />
					<div className='contact__form-box'>
						{isLoading ? (
							<Loader />
						) : (
							<button className='contact__form-submit-button' type='submit'>
								{buttonText}
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};
