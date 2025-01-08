import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';

const Header: React.FC = () => {
	const [headerBackground, setHeaderBackground] = useState(false);

	const showHeaderBackground = () => {
		if (window.scrollY > 30) {
			setHeaderBackground(true);
		} else {
			setHeaderBackground(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', showHeaderBackground);

		return () => {
			window.removeEventListener('scroll', showHeaderBackground);
		};
	}, [headerBackground]);

	return (
		<header className={`header ${headerBackground && 'header-active'}`}>
			<div className='header__box'>
				<h2 className='header__title'>
					<div className='header__title-container' onClick={scrollToTop}>
						<span>Ś</span>
						<span>w</span>
						<span>i</span>
						<span>a</span>
						<span>t</span>
						<span>A</span>
						<span>n</span>
						<span>n</span>
						<span>y</span>
					</div>
				</h2>
				<nav className='header__nav'>
					<NavLink
						to='/oferta'
						className={({ isActive }) => {
							return 'header__nav-link ' + (isActive && 'header__nav-link-active');
						}}
						onClick={scrollToTop}>
						Oferta
					</NavLink>
					<NavLink
						to='/kontakt'
						className={({ isActive }) => {
							return 'header__nav-link ' + (isActive && 'header__nav-link-active');
						}}
						onClick={scrollToTop}>
						Kontakt
					</NavLink>
					<NavLink
						to='/regulamin'
						className={({ isActive }) => {
							return 'header__nav-link ' + (isActive && 'header__nav-link-active');
						}}
						onClick={scrollToTop}>
						Regulamin
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
