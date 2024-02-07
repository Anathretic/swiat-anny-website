import { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { contactSchema } from '../schemas/schemas';
import { ContactInputs } from '../models/inputs.model';
import { Loader } from './littleComponents/Loader';
import { FormInput, FormTextarea } from './littleComponents/FormElements';
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
			name: name.charAt(0).toUpperCase() + name.slice(1),
			email,
			subject: subject.charAt(0).toUpperCase() + subject.slice(1),
			message,
			'g-recaptcha-response': token,
		};

		if (token) {
			await emailjs
				.send(
					`${import.meta.env.VITE_SERVICE_ID}`,
					`${import.meta.env.VITE_CONTACT_TEMPLATE_ID}`,
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
				<form className='form' onSubmit={handleSubmit(onSubmit)}>
					<h3 className='form__title'>Zapytaj mnie!</h3>
					<hr className='form__strap' />
					<FormInput
						label='Imię:'
						inputName='name'
						placeholder='Wprowadź imię..'
						children={errors.name?.message}
						aria-invalid={errors.name ? true : false}
						{...register('name')}
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
						label='Temat:'
						inputName='subject'
						placeholder='Wprowadź temat..'
						children={errors.subject?.message}
						aria-invalid={errors.subject ? true : false}
						{...register('subject')}
					/>
					<FormTextarea
						label='Wiadomość:'
						inputName='message'
						placeholder='Wprowadź wiadomość..'
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
							<Loader className='loader' />
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
