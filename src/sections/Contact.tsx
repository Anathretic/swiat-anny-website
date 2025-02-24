import { ContactForm } from '../components/Forms/ContactForm';

const Contact: React.FC = () => {
	return (
		<section id='kontakt' className='contact'>
			<div className='contact__container dark-blue-gradient'>
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
