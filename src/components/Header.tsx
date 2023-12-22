import { Link, NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
	return (
		<header className='header'>
			<div className='header__box'>
				<h2 className='header__title'>
					<Link to='/' className='header__title-link'>
						Anna Maluje
					</Link>
				</h2>
				<nav className='header__nav'>
					<NavLink to='/' className='header__nav-link'>
						Oferta
					</NavLink>
					<NavLink to='/' className='header__nav-link'>
						Kontakt
					</NavLink>
					<NavLink to='/' className='header__nav-link'>
						Regulamin
					</NavLink>
				</nav>
			</div>
		</header>
	);
};
