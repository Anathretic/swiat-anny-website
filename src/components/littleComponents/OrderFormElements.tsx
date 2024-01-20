import React from 'react';
import { InputAndTextarea } from '../../models/formElements.model';

export const OrderInput: React.FC<InputAndTextarea> = React.forwardRef<HTMLInputElement, InputAndTextarea>(
	({ label, inputName, placeholder, value, readOnly, children, ...props }, ref) => {
		return (
			<div className='order__form-box'>
				<label className='order__form-label' htmlFor={inputName}>
					{label}
				</label>
				<input
					className='order__form-input'
					type='text'
					id={inputName}
					placeholder={placeholder}
					value={value}
					readOnly={readOnly}
					ref={ref}
					autoComplete='off'
					{...props}
				/>
				<p className='order__form-input-error'>{children}</p>
			</div>
		);
	}
);

export const OrderTextarea: React.FC<InputAndTextarea> = React.forwardRef<HTMLTextAreaElement, InputAndTextarea>(
	({ label, inputName, placeholder, children, ...props }, ref) => {
		return (
			<div className='order__form-box'>
				<label className='order__form-label' htmlFor={inputName}>
					{label}
				</label>
				<textarea
					className='order__form-textarea'
					id='message'
					placeholder={placeholder}
					autoComplete='off'
					ref={ref}
					{...props}></textarea>
				<p className='order__form-input-error'>{children}</p>
			</div>
		);
	}
);
