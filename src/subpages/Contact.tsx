import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReCAPTCHA from 'react-google-recaptcha';
import { useContactFormButton } from '../hooks/useContactFormButton';
import { ContactForm } from '../components/Forms/ContactForm';

const Contact: React.FC = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorValue, setErrorValue] = useState('');
	const [buttonText, setButtonText] = useContactFormButton();
	const refCaptcha = useRef<ReCAPTCHA>(null);
	const isMobile = useMediaQuery({ query: '(max-width: 499px)' });

	return (
		<div className='contact'>
			<div className='contact__container dark-blue-gradient'>
				<ContactForm
					isLoading={isLoading}
					setIsLoading={setIsLoading}
					errorValue={errorValue}
					setErrorValue={setErrorValue}
					buttonText={buttonText}
					setButtonText={setButtonText}
					isMobile={isMobile}
					refCaptcha={refCaptcha}
				/>
			</div>
		</div>
	);
};

export default Contact;
