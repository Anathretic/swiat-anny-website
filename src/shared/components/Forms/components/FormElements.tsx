import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
	getContactAndOrderFormInitialValues,
	setButtonText,
	setErrorValue,
} from '../../../redux/sharedSlices/contactAndOrderFormSlice';
import { resetSize } from '../../../redux/sharedSlices/paintingSizeSlice';
import { scrollToTop } from '../../../utils/scrollToTop';
import {
	CheckboxModel,
	InputAndTextareaModel,
	ReCaptchaV2Model,
	ReturnButtonModel,
	SelectModel,
} from '../models/components.model';
import { FormLoader } from './FormLoader';

export const FormInput: React.FC<InputAndTextareaModel> = React.forwardRef<HTMLInputElement, InputAndTextareaModel>(
	({ label, inputName, placeholder, errorMessage, ...props }, ref) => {
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

export const SelectElement: React.FC<SelectModel> = React.forwardRef<HTMLSelectElement, SelectModel>(
	({ label, selectName, selectedSize, errorMessage, ...props }, ref) => {
		return (
			<div className='form__box'>
				<label className='form__label' htmlFor={selectName}>
					{label}
				</label>
				<select className='form__select' ref={ref} id={selectName} defaultValue={selectedSize} {...props}>
					<option value=''> -- wybierz rozmiar -- </option>
					<option value='20cm x 20cm'>20cm x 20cm</option>
					<option value='30cm x 24cm'>30cm x 24cm</option>
					<option value='40cm x 30cm'>40cm x 30cm</option>
				</select>
				<p className='form__select-error'>{`${errorMessage === undefined ? '' : errorMessage}`}</p>
			</div>
		);
	}
);

export const CheckboxElement: React.FC<CheckboxModel> = React.forwardRef<HTMLInputElement, CheckboxModel>(
	({ label, inputName, errorMessage, ...props }, ref) => {
		return (
			<div className='form__box form__box--checkbox'>
				<div>
					<label className={`form__label ${errorMessage && 'form__box--checkbox-error'}`} htmlFor={inputName}>
						{label} <Link to='/regulamin'>regulaminem.</Link>
					</label>
					<input className='form__input' type='checkbox' id={inputName} ref={ref} {...props} />
				</div>
			</div>
		);
	}
);

export const FormRecaptchaV2: React.FC<ReCaptchaV2Model> = ({ refCaptcha }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });
	const { errorValue } = useAppSelector(getContactAndOrderFormInitialValues);

	return (
		<div className={`form__recaptcha-box ${errorValue && 'form__recaptcha-error'}`}>
			<ReCAPTCHA
				key={isMobile ? 'compact-recaptcha' : 'normal-recaptcha'}
				size={isMobile ? 'compact' : 'normal'}
				sitekey={import.meta.env.VITE_SITE_KEY}
				ref={refCaptcha}
			/>
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
			<button className={`form__submit ${isLoading && 'form__submit--is-loading'}`} type='submit'>
				{isLoading ? <FormLoader /> : buttonText}
			</button>
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
					onClick={e => {
						dispatch(setErrorValue(''));
						dispatch(resetSize());
						scrollToTop(e);
					}}>
					Powrót
				</Link>
			)}
		</>
	);
};
