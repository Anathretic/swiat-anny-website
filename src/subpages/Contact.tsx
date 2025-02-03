import { ContactForm } from '../components/Forms/ContactForm';

const Contact: React.FC = () => {
	return (
		<div className='contact'>
			<div className='contact__container dark-blue-gradient'>
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
