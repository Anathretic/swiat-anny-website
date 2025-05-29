import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import Loader from '../../Loader';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
	getContactAndOrderFormInitialValues,
	setButtonText,
	setErrorValue,
} from '../../../redux/contactAndOrderFormReduxSlice/contactAndOrderFormSlice';
import { InputAndTextareaModel, ReCaptchaV2Model, ReturnButtonModel } from '../../../models/formElements.model';
import { resetSize } from '../../../redux/paintingSizeReduxSlice/paintingSizeSlice';
import { scrollToTop } from '../../../utils/scrollToTop';

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
			<p className='form__textarea-error'>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
		</div>
	);
});

export const FormRecaptchaV2: React.FC<ReCaptchaV2Model> = ({ refCaptcha }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });
	const { errorValue } = useAppSelector(getContactAndOrderFormInitialValues);

	return (
		<div className='form__recaptcha-box'>
			<ReCAPTCHA
				key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
				size={isMobile ? 'compact' : 'normal'}
				sitekey={import.meta.env.VITE_SITE_KEY}
				ref={refCaptcha}
			/>
			<div className='form__recaptcha-error'>
				<p>{errorValue}</p>
			</div>
		</div>
	);
};

export const FormSubmit: React.FC = () => {
	const { isLoading, buttonText } = useAppSelector(getContactAndOrderFormInitialValues);
	const dispatch = useAppDispatch();

	const checkButtonValue = () => {
		if (buttonText !== 'Wyślij') {
			setTimeout(() => {
				dispatch(setButtonText('Wyślij'));
			}, 2500);
		}
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(checkButtonValue, [buttonText]);

	return (
		<div className='form__box'>
			{isLoading ? (
				<Loader className='loader' />
			) : (
				<button className='form__submit' type='submit'>
					{buttonText}
				</button>
			)}
		</div>
	);
};

export const ReturnButton: React.FC<ReturnButtonModel> = ({ path }) => {
	const { isLoading } = useAppSelector(getContactAndOrderFormInitialValues);
	const dispatch = useAppDispatch();

	return (
		<>
			{!isLoading && (
				<Link
					to={path}
					className='form__return-btn'
					onClick={() => {
						dispatch(setErrorValue(''));
						dispatch(resetSize());
						scrollToTop();
					}}>
					Powrót
				</Link>
			)}
		</>
	);
};
