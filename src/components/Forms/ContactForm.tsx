import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { FormInput, FormRecaptchaV2, FormSubmit, FormTextarea } from './components/FormElements';
import { contactFormInputsConfig } from './inputsConfig/inputsConfig';
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

	const contactFormInputs = contactFormInputsConfig(errors, register);

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
			{contactFormInputs.map((input, id) => (
				<FormInput
					key={id}
					label={input.label}
					inputName={input.inputName}
					placeholder={input.placeholder}
					errorMessage={input.errorMessage}
					aria-invalid={input.isInvalid}
					{...input.register}
				/>
			))}
			<FormTextarea
				label='Wiadomość:'
				inputName='message'
				placeholder='Wprowadź wiadomość..'
				errorMessage={errors.message?.message}
				aria-invalid={errors.message ? true : false}
				{...register('message')}
			/>
			<FormRecaptchaV2 isMobile={isMobile} refCaptcha={refCaptcha} errorValue={errorValue} />
			<hr className='form__strap' />
			<FormSubmit isLoading={isLoading} buttonText={buttonText} />
		</form>
	);
};
