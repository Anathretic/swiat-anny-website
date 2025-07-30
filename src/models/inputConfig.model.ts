import { Path } from 'react-hook-form';

export type InputAndTextareaConfigModel<T> = {
	label: string;
	inputName: Path<T>;
	type?: string;
	placeholder?: string;
};
