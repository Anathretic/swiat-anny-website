import { Link } from 'react-router-dom';
import { MailToProps } from '../../models/mailToProps.model';

export const MailToButton: React.FC<MailToProps> = ({ mailto, label, ...otherProps }) => {
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
