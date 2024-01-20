export interface InputAndTextarea {
	label: string;
	inputName: string;
	children: React.ReactNode;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
}