import React from 'react';
import { InputAndTextarea } from '../../models/formElements.model';

export const FormInput: React.FC<InputAndTextarea> = React.forwardRef<HTMLInputElement, InputAndTextarea>(
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

export const FormTextarea: React.FC<InputAndTextarea> = React.forwardRef<HTMLTextAreaElement, InputAndTextarea>(
	({ label, inputName, placeholder, children, ...props }, ref) => {
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
	}
);
