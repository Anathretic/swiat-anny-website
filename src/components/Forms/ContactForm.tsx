import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormSubmits } from '../../hooks/useFormSubmits.ts';
import { FormInput, FormRecaptchaV2, FormSubmit, FormTextarea } from './components/FormElements';
import { contactFormInputsConfig } from './inputsConfig/inputsConfig';
import { ContactFormModel } from '../../models/form.model.ts';
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
	const { contactSubmit } = useFormSubmits<ContactFormModel>({ reset, refCaptcha });
	const contactFormInputs = contactFormInputsConfig(errors, register);

	return (
		<form className='contact__form' onSubmit={handleSubmit(contactSubmit)}>
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
			<FormSubmit />
		</form>
	);
};
