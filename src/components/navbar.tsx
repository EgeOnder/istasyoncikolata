'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';

import Link from 'next/link';

interface NavbarProps {
	off: boolean;
}

const Navbar = ({ off }: NavbarProps) => {
	const [navbarActive, setNavbarActive] = useState<boolean>(false);
	const [hamburger, setHamburger] = useState<boolean>(false);

	const navRef = useRef<boolean>();
	navRef.current = navbarActive;

	useEffect(() => {
		if (window) {
			const handleScroll = () => {
				const show = window.scrollY > 100;

				if (show) setNavbarActive(true);
				else setNavbarActive(false);
			};

			document.addEventListener('scroll', handleScroll);

			return () => document.removeEventListener('scroll', handleScroll);
		}
	});

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
				<Link href='/'>
					<img
						src='/logo/logowithtextwhite.svg'
						alt='logo'
						className='navbar-image'
					/>
				</Link>
				<div className='navbar-buttons'>
					<div className='navbar-buttons hidden-on-mobile'>
						<Link
							className='btn-text'
							style={{ marginRight: 24 }}
							href='/menu'
						>
							MENÜ
						</Link>
						<Link
							className='btn-text'
							style={{ marginRight: 16 }}
							href='/iletisim'
						>
							İLETİŞİM
						</Link>
					</div>
					<div
						className='navbar-hamburger btn-icon'
						onClick={hamburgerToggle}
					>
						<Menu />
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
					<Link href='menu'>
						<li className='hamburger-li'>MENÜ</li>
					</Link>
					<Link href='iletisim'>
						<li className='hamburger-li'>İLETİŞİM</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
