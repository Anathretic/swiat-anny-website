import { Path } from 'react-hook-form';

export interface InputAndTextareaConfigModel<T> {
	label: string;
	inputName: Path<T>;
	type?: string;
	placeholder?: string;
}
