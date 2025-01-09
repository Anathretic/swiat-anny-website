import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ContactFormModel } from '../../../models/contactForm.model';
import { OrderFormModel } from '../../../models/orderForm.model.ts';

export const contactFormInputsConfig = (errors: FieldErrors, register: UseFormRegister<ContactFormModel>) => [
	{
		label: 'Imię:',
		inputName: 'firstName',
		placeholder: 'Wprowadź imię..',
		errorMessage: errors.firstName?.message,
		isInvalid: !!errors.firstName,
		register: register('firstName'),
	},
	{
		label: 'E-mail:',
		inputName: 'email',
		placeholder: 'Wprowadź e-mail..',
		errorMessage: errors.email?.message,
		isInvalid: !!errors.email,
		register: register('email'),
	},
	{
		label: 'Temat',
		inputName: 'subject',
		placeholder: 'Wprowadź temat..',
		errorMessage: errors.subject?.message,
		isInvalid: !!errors.subject,
		register: register('subject'),
	},
];

export const orderFormInputsConfig = (errors: FieldErrors, register: UseFormRegister<OrderFormModel>) => [
	{
		label: 'Imię:',
		inputName: 'firstName',
		placeholder: 'Wprowadź imię..',
		errorMessage: errors.firstName?.message,
		isInvalid: !!errors.firstName,
		register: register('firstName'),
	},
	{
		label: 'Nazwisko:',
		inputName: 'secondName',
		placeholder: 'Wprowadź imię..',
		errorMessage: errors.secondName?.message,
		isInvalid: !!errors.secondName,
		register: register('secondName'),
	},
	{
		label: 'E-mail:',
		inputName: 'email',
		placeholder: 'Wprowadź e-mail..',
		errorMessage: errors.email?.message,
		isInvalid: !!errors.email,
		register: register('email'),
	},
	{
		label: 'Nr telefonu:',
		inputName: 'phone',
		placeholder: 'Wprowadź numer telefonu..',
		errorMessage: errors.phone?.message,
		isInvalid: !!errors.phone,
		register: register('phone'),
	},
	{
		label: 'Rozmiar:',
		inputName: 'size',
		placeholder: 'Wprowadź rozmiar..',
		errorMessage: errors.size?.message,
		isInvalid: !!errors.size,
		register: register('size'),
	},
];
