import {
	emailField,
	firstnameField,
	phoneField,
	secondnameField,
} from '../../../shared/components/Forms/config/inputsConfig';
import { InputAndTextareaConfigModel } from '../../../shared/components/Forms/models/config.model';
import { OrderFormModel } from '../../../shared/components/Forms/models/forms.model';

export const orderFormInputs: InputAndTextareaConfigModel<OrderFormModel>[] = [
	firstnameField('firstName'),
	secondnameField('secondName'),
	emailField('email'),
	phoneField('phone'),
];
