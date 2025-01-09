import React from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import Loader from '../../Loader';
import {
	CloseButtonModel,
	InputAndTextareaModel,
	RecaptchaV2Model,
	SubmitModel,
} from '../../../models/formElements.model';

export const FormInput: React.FC<InputAndTextareaModel> = React.forwardRef<HTMLInputElement, InputAndTextareaModel>(
	({ label, inputName, placeholder, value, readOnly, errorMessage, ...props }, ref) => {
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
				<p className='form__input-error'>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
			</div>
		);
	}
);

export const FormTextarea: React.FC<InputAndTextareaModel> = React.forwardRef<
	HTMLTextAreaElement,
	InputAndTextareaModel
>(({ label, inputName, placeholder, errorMessage, ...props }, ref) => {
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
			<p className='form__input-error'>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
		</div>
	);
});

export const FormRecaptchaV2: React.FC<RecaptchaV2Model> = ({ isMobile, refCaptcha, errorValue }) => {
	return (
		<div className='form__box'>
			<ReCAPTCHA
				key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
				size={isMobile ? 'compact' : 'normal'}
				sitekey={import.meta.env.VITE_SITE_KEY}
				ref={refCaptcha}
			/>
			<div className='form__error'>
				<p>{errorValue}</p>
			</div>
		</div>
	);
};

export const FormSubmit: React.FC<SubmitModel> = ({ isLoading, buttonText }) => {
	return (
		<div className='form__box'>
			{isLoading ? (
				<Loader className='loader' />
			) : (
				<button className='form__button' type='submit'>
					{buttonText}
				</button>
			)}
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
