import * as yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(yup);

const errorMessage = { requiredField: 'To pole jest wymagane!' };

export const contactSchema = yup.object({
	name: yup
		.string()
		.min(3, 'Imię powinno składać się z minimum 3 liter!')
		.max(16, 'Imię nie powinno mieć więcej niż 16 liter!')
		.minUppercase(1, 'Powinieneś zacząć z dużej litery, prawda?')
		.matches(/^[a-zA-Z]+$/, 'Tylko litery! Imię nie ma spacji..')
		.required(errorMessage.requiredField),
	email: yup.string().email('Wprowadź poprawny adres e-mail!').required(errorMessage.requiredField),
	subject: yup
		.string()
		.min(3, 'Temat powinien mieć przynajmniej 3 litery!')
		.max(25, 'Temat nie powinien mieć więcej niż 25 liter!')
		.matches(/^[a-zA-Z ]+$/, 'Tylko litery!')
		.required(errorMessage.requiredField),
	message: yup
		.string()
		.min(5, 'Rozpisz się..')
		.max(500, 'Za dużo! Nie więcej niż 150 słów..')
		.required(errorMessage.requiredField),
});
