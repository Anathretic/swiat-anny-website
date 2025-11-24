import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormSubmits } from '../../../../shared/components/Forms/hooks/useFormSubmits.ts';
import {
	CheckboxElement,
	FormInput,
	FormRecaptchaV2,
	FormSubmit,
	FormTextarea,
} from '../../../../shared/components/Forms/components/FormElements.tsx';
import { contactFormInputs } from '../config/formConfig.ts';
import { ContactFormModel } from '../../../../shared/components/Forms/models/forms.model.ts';
import { contactSchema } from '../../../../shared/schemas/schemas.ts';

import * as yup from 'yup';

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
			privacyPolicy: false,
		},
		resolver: yupResolver(contactSchema as yup.ObjectSchema<ContactFormModel>),
	});

	const refCaptcha = useRef<ReCAPTCHA>(null);
	const { contactSubmit } = useFormSubmits<ContactFormModel>({ reset, refCaptcha });

	return (
		<form className='contact__form' onSubmit={handleSubmit(contactSubmit)}>
			{contactFormInputs.map((input, id) => {
				const error = errors[input.inputName];
				return (
					<FormInput
						key={id}
						label={input.label}
						inputName={input.inputName}
						placeholder={input.placeholder}
						errorMessage={error?.message as string}
						aria-invalid={!!error}
						{...register(input.inputName)}
					/>
				);
			})}
			<FormTextarea
				label='Wiadomość:'
				inputName='message'
				placeholder='Wprowadź wiadomość'
				errorMessage={errors.message?.message}
				aria-invalid={errors.message ? true : false}
				{...register('message')}
			/>
			<FormRecaptchaV2 refCaptcha={refCaptcha} />
			<CheckboxElement
				label='Wyrażam zgodę na przetwarzanie moich danych zgodnie z obowiązującym '
				inputName='privacyPolicy'
				{...register('privacyPolicy')}
				errorMessage={errors.privacyPolicy?.message}
			/>
			<FormSubmit />
		</form>
	);
};
