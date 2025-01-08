import * as yup from 'yup';
import YupPassword from 'yup-password';
import 'yup-phone-lite';

YupPassword(yup);

const errorMessage = { requiredField: 'To pole jest wymagane!' };

export const contactSchema = yup.object({
	firstName: yup
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
		.minLowercase(4, 'Zbyt mało liter!')
		.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]+$/, 'Tylko litery!')
		.required(errorMessage.requiredField),
	message: yup
		.string()
		.min(5, 'Rozpisz się..')
		.max(2500, 'Nie więcej niż 500 słów..')
		.required(errorMessage.requiredField),
});

export const orderSchema = yup
	.object({
		secondName: yup
			.string()
			.min(2, 'Nazwisko jest zbyt krótkie!')
			.max(51, 'Nazwisko jest zbyt długie!')
			.matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ-]+$/, 'Tylko litery! Bez spacji!')
			.required(errorMessage.requiredField),
		phone: yup.string().phone('PL', 'Podaj prawidłowy numer!').required(errorMessage.requiredField),
		size: yup
			.string()
			.oneOf(['20cm x 20cm', '30cm x 24cm', '40cm x 30cm'], 'Wybierz opcję!')
			.required(errorMessage.requiredField),
	})
	.concat(contactSchema.omit(['subject']));
