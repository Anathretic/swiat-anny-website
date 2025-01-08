import { SubmitHandler, useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { FormInput, FormLoader, FormTextarea } from './components/FormElements';
import { ContactComponentModel, ContactFormModel } from '../../models/contactForm.model';
import { contactSchema } from '../../schemas/schemas';

export const ContactForm: React.FC<ContactComponentModel> = ({
	isLoading,
	setIsLoading,
	errorValue,
	setErrorValue,
	buttonText,
	setButtonText,
	isMobile,
	refCaptcha,
}) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormModel>({
		defaultValues: {
			firstName: '',
			email: '',
			subject: '',
			message: '',
		},
		resolver: yupResolver(contactSchema),
	});

	const onSubmit: SubmitHandler<ContactFormModel> = async ({ firstName, email, subject, message }) => {
		setIsLoading(true);
		setErrorValue('');
		const token = refCaptcha.current?.getValue();
		refCaptcha.current?.reset();

		const params = {
			name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
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
					setErrorValue('Coś poszło nie tak..');
					if (err instanceof Error) {
						console.log(`Twój błąd to: ${err.message}`);
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
			<h3 className='form__title'>Zapytaj mnie!</h3>
			<hr className='form__strap' />
			<FormInput
				label='Imię:'
				inputName='name'
				placeholder='Wprowadź imię..'
				children={errors.firstName?.message}
				aria-invalid={errors.firstName ? true : false}
				{...register('firstName')}
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
					<FormLoader className='loader' />
				) : (
					<button className='form__button' type='submit'>
						{buttonText}
					</button>
				)}
			</div>
		</form>
	);
};
