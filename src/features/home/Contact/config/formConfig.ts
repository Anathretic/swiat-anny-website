import { emailField, firstnameField, subjectField } from '../../../../shared/components/Forms/config/inputsConfig';
import { InputAndTextareaConfigModel } from '../../../../shared/components/Forms/models/config.model';
import { ContactFormModel } from '../../../../shared/components/Forms/models/forms.model';

export const contactFormInputs: InputAndTextareaConfigModel<ContactFormModel>[] = [
	firstnameField('firstName'),
	emailField('email'),
	subjectField('subject'),
];
