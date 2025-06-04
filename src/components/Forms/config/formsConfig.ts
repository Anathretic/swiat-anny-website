import { ContactFormModel, OrderFormModel } from '../../../models/form.model.ts.ts';
import { InputAndTextareaConfigModel } from '../../../models/inputConfig.model.ts';
import { emailField, firstnameField, phoneField, secondnameField, subjectField } from './inputsConfig.ts';

export const contactFormInputs: InputAndTextareaConfigModel<ContactFormModel>[] = [
	firstnameField('firstName'),
	emailField('email'),
	subjectField('subject'),
];

export const orderFormInputs: InputAndTextareaConfigModel<OrderFormModel>[] = [
	firstnameField('firstName'),
	secondnameField('secondName'),
	emailField('email'),
	phoneField('phone'),
];
