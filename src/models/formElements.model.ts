export interface InputAndTextareaModel {
	label: string;
	inputName: string;
	children: React.ReactNode;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
}

export interface LoaderModel {
	className: string;
}

export interface CloseButtonModel {
	path: string;
	onClick: React.MouseEventHandler<HTMLAnchorElement>;
}
