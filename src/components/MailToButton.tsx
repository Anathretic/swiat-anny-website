import { Link } from 'react-router-dom';
import { MailToButtonModel } from '../models/mailToButton.model';

const MailToButton: React.FC<MailToButtonModel> = ({ mailto, label, ...otherProps }) => {
	const handleMailto = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		window.location.href = mailto;
	};

	return (
		<Link className='terms__text-link' to='#' onClick={e => handleMailto(e)} {...otherProps}>
			{label}
		</Link>
	);
};

export default MailToButton;
