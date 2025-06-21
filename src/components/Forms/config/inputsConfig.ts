import { Path } from 'react-hook-form';
import { InputAndTextareaConfigModel } from '../../../models/inputConfig.model';

export const firstnameField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Imię:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź imię',
});

export const secondnameField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Nazwisko:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź nazwisko',
});

export const emailField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'E-mail:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź e-mail',
});

export const phoneField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Telefon:',
	inputName,
	type: 'tel',
	placeholder: 'Wprowadź numer telefonu',
});

export const subjectField = <T>(inputName: Path<T>): InputAndTextareaConfigModel<T> => ({
	label: 'Temat:',
	inputName,
	type: 'text',
	placeholder: 'Wprowadź temat',
});
