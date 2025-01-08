import React from 'react';
import { Link } from 'react-router-dom';
import { CloseButtonModel, InputAndTextareaModel, LoaderModel } from '../../../models/formElements.model';

export const FormInput: React.FC<InputAndTextareaModel> = React.forwardRef<HTMLInputElement, InputAndTextareaModel>(
	({ label, inputName, placeholder, value, readOnly, children, ...props }, ref) => {
		return (
			<div className='form__box'>
				<label className='form__label' htmlFor={inputName}>
					{label}
				</label>
				<input
					className='form__input'
					type='text'
					id={inputName}
					placeholder={placeholder}
					value={value}
					readOnly={readOnly}
					ref={ref}
					autoComplete='off'
					{...props}
				/>
				<p className='form__input-error'>{children}</p>
			</div>
		);
	}
);

export const FormTextarea: React.FC<InputAndTextareaModel> = React.forwardRef<
	HTMLTextAreaElement,
	InputAndTextareaModel
>(({ label, inputName, placeholder, children, ...props }, ref) => {
	return (
		<div className='form__box'>
			<label className='form__label' htmlFor={inputName}>
				{label}
			</label>
			<textarea
				className='form__textarea'
				id='message'
				placeholder={placeholder}
				autoComplete='off'
				ref={ref}
				{...props}></textarea>
			<p className='form__input-error'>{children}</p>
		</div>
	);
});

export const FormLoader: React.FC<LoaderModel> = ({ className }) => {
	return (
		<div className={className}>
			<div className='loader__spinner' />
		</div>
	);
};

export const FormCloseButton: React.FC<CloseButtonModel> = ({ path, onClick }) => {
	return (
		<Link to={path} className='form__close-button' onClick={onClick}>
			X
		</Link>
	);
};
