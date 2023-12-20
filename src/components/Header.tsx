import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { IoIosMenu } from 'react-icons/io';

export const Header: React.FC = () => {
	const [showMenu, setShowMenu] = useState(false);

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<header className='header'>
			<div className='header__box'>
				<h2 className='header__title'>
					<Link to='/' className='header__title-link'>
						Anna Maluje
					</Link>
				</h2>
				<nav className='header__nav-container'>
					{isMobile ? (
						<>
							{showMenu ? (
								<div className='header__nav-mobile'>
									<NavLink to='/' className='header__mobile-link'>
										Oferta
									</NavLink>
									<NavLink to='/' className='header__mobile-link'>
										Kontakt
									</NavLink>
									<NavLink to='/' className='header__mobile-link'>
										Regulamin
									</NavLink>
								</div>
							) : (
								<button type='button' className='header__mobile-button' onClick={() => setShowMenu(true)}>
									<IoIosMenu />
								</button>
							)}
						</>
					) : (
						<div className='header__nav-desktop'>
							<NavLink to='/' className='header__desktop-link'>
								Oferta
							</NavLink>
							<NavLink to='/' className='header__desktop-link'>
								Kontakt
							</NavLink>
							<NavLink to='/' className='header__desktop-link'>
								Regulamin
							</NavLink>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
};
