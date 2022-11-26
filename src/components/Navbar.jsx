/* eslint-disable indent */
import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ off }) => {
	const [navbarActive, setNavbarActive] = useState();
	const [hamburger, setHamburger] = useState(false);

	const navRef = useRef();
	navRef.current = navbarActive;

	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 100;

			if (show) setNavbarActive(true);
			else setNavbarActive(false);
		};

		document.addEventListener('scroll', handleScroll);

		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

	const hamburgerToggle = () => {
		if (hamburger) {
			const show = window.scrollY > 100;
			setHamburger(false);
			if (!show) setNavbarActive(false);
		} else {
			setHamburger(true);
			setNavbarActive(true);
		}
	};

	return (
		<nav
			className='navbar'
			style={{
				backgroundColor: off
					? 'black'
					: navbarActive
					? 'black'
					: 'transparent',
			}}
		>
			<div className='navbar-container'>
				<a href='/'>
					<img
						src='/logo/logowithtextwhite.svg'
						alt='logo'
						className='navbar-image'
					/>
				</a>
				<div className='navbar-buttons'>
					<div className='navbar-buttons hidden-on-mobile'>
						<a
							className='btn-text'
							style={{ marginRight: 24 }}
							href='/menu'
						>
							MENÜ
						</a>
						{/* <button
								className="btn-text"
								style={{ marginRight: 24 }}
								onClick={() => history.push('/galeri')}
							>
								GALERİ
							</button> */}
						<a
							className='btn-text'
							style={{ marginRight: 16 }}
							href='/iletisim'
						>
							İLETİŞİM
						</a>
					</div>
					<div
						className='navbar-hamburger btn-icon'
						onClick={hamburgerToggle}
					>
						<i className='fas fa-bars'></i>
					</div>
				</div>
			</div>
			<div
				className={
					hamburger
						? 'hamburger-container hamburger-active'
						: 'hamburger-container'
				}
			>
				<ul className='hamburger-list'>
					<li
						className='hamburger-li'
						onClick={() => history.push('/menu')}
					>
						MENÜ
					</li>
					<li
						className='hamburger-li'
						onClick={() => history.push('/galeri')}
					>
						GALERİ
					</li>
					<li
						className='hamburger-li'
						onClick={() => history.push('/iletisim')}
					>
						İLETİŞİM
					</li>
				</ul>
			</div>
			<script
				src='https://kit.fontawesome.com/0bfee9634a.js'
				crossOrigin='anonymous'
			></script>
		</nav>
	);
};

export default Navbar;
