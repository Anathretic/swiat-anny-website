import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { FormInput, FormRecaptchaV2, FormSubmit, FormTextarea } from './components/FormElements';
import { contactFormInputsConfig } from './inputsConfig/inputsConfig';
import { useAppDispatch } from '../../hooks/reduxHooks';
import {
	setButtonText,
	setErrorValue,
	setIsLoading,
} from '../../redux/contactAndOrderFormReduxSlice/contactAndOrderFormSlice';
import { ContactFormModel } from '../../models/contactForm.model';
import { contactSchema } from '../../schemas/schemas';

export const ContactForm: React.FC = () => {
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

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const dispatch = useAppDispatch();
	const contactFormInputs = contactFormInputsConfig(errors, register);

	const onSubmit: SubmitHandler<ContactFormModel> = async ({ firstName, email, subject, message }) => {
		dispatch(setIsLoading(true));
		dispatch(setErrorValue(''));
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
					dispatch(setButtonText('Wysłane!'));
					reset();
				})
				.catch(err => {
					dispatch(setErrorValue('Coś poszło nie tak..'));
					if (err instanceof Error) {
						console.log(`Twój błąd to: ${err.message}`);
					}
				})
				.finally(() => {
					dispatch(setIsLoading(false));
				});
		} else {
			dispatch(setIsLoading(false));
			dispatch(setErrorValue('Nie bądź 🤖!'));
		}
	};

	return (
		<form className='form' onSubmit={handleSubmit(onSubmit)}>
			<h3 className='form__title'>Kontakt</h3>
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
			<FormRecaptchaV2 refCaptcha={refCaptcha} />
			<hr className='form__strap' />
			<FormSubmit />
		</form>
	);
};
