import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import throttle from 'lodash/throttle';

const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = throttle(() => {
			setIsScrolled(window.scrollY > 30);
		}, 100);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`header ${isScrolled && 'header-active'}`}>
			<div className='header__box'>
				<h2 className='header__title'>
					<HashLink smooth to='/#'>
						Świat Anny
					</HashLink>
				</h2>
				<nav className='header__nav'>
					<HashLink smooth to='/#historia' className={'header__nav-link'}>
						Historia
					</HashLink>
					<HashLink smooth to='/#oferta' className={'header__nav-link'}>
						Oferta
					</HashLink>
					<HashLink smooth to='/#opinie' className={'header__nav-link'}>
						Opinie
					</HashLink>
					<HashLink smooth to='/#kontakt' className={'header__nav-link'}>
						Kontakt
					</HashLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
