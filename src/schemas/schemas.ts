import * as yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(yup);

const errorMessage = { requiredField: 'To pole jest wymagane!' };

export const contactSchema = yup.object({
	name: yup
		.string()
		.min(3, 'Imię jest zbyt krótkie!')
		.max(16, 'Imię jest zbyt długie!')
		.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/, 'Tylko litery! Bez spacji!')
		.required(errorMessage.requiredField),
	email: yup.string().email('Wprowadź poprawny e-mail!').required(errorMessage.requiredField),
	subject: yup
		.string()
		.min(3, 'Temat jest zbyt krótki!')
		.max(25, 'Temat jest zbyt długi!')
		.minLowercase(5, 'Zbyt mało liter!')
		.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+$/, 'Tylko litery!')
		.required(errorMessage.requiredField),
	message: yup
		.string()
		.min(5, 'Rozpisz się..')
		.max(500, 'Nie więcej niż 150 słów..')
		.required(errorMessage.requiredField),
});
