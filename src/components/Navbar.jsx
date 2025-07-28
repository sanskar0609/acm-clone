import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isNavVisible, setIsNavVisible] = useState(false);
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setIsScrolled(currentScrollY > 10 && currentScrollY > lastScrollY);
			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ name: 'Events', href: '/events' },
		{ name: 'Board', href: '/board/main' },
		{ name: 'Home', href: '/' },
		{ name: 'Blogs', href: '/blogs' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<nav
			style={{
				width: isScrolled ? '8%' : 'fit-content',
				transition: 'width 0.1s ease-in-out',
			}}
			className={`fixed h-14 left-1/2 min-w-[28%] sm:min-w-[8%] transform -translate-x-1/2 px-4 py-2 top-7 z-50 rounded-full backdrop-blur-md bg-zinc-600/60 text-white shadow-lg ease-in-out flex items-center`}
		>
			{/* Mobile Nav Container */}
			<div
				className={`absolute p-4 top-16 left-1/2 transform -translate-x-1/2 w-[40vw] backdrop-blur-md bg-zinc-700/95 rounded-xl shadow-lg flex flex-col items-center gap-5 text-xl transition-opacity duration-300 ${(isNavVisible && !isScrolled) ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
					} sm:hidden`}
				onBlur={() => setIsNavVisible(false)}
			>
				{navItems.map((item) => (
					<NavItem key={item.name} item={item} onClick={() => setIsNavVisible(false)} currentPath={location.pathname} isNavVisible />
				))}
			</div>

			<div
				className={`relative left-1/2 transform -translate-x-1/2 top-0 hidden sm:flex gap-3 items-center flex-grow justify-center transition-opacity duration-100 ${isScrolled ? 'opacity-0 pointer-events-none delay-0' : 'opacity-100 delay-100'
					}`}
			>
				{navItems.map((item) => (
					<NavItem key={item.name} item={item} currentPath={location.pathname} isNavVisible />
				))}
			</div>

			{/* Center Logo */}
			<div className="absolute left-1/2 transform -translate-x-1/2">
				<Link
					to={isHomePage ? "/" : isNavVisible ? "/" : "#"}
					className="flex-shrink-0 w-[60px] h-[40px] flex items-center justify-center bg-transparent"
					onClick={() => setIsNavVisible((prev) => !prev)}
				>	
					<img src="/logo.png" alt="logo" />
				</Link>
			</div>
		</nav>
	);
}

function NavItem({ item, currentPath, isNavVisible, onClick }) {
	return (
		<Link
			to={item.href}
			onClick={(e) => {
				if (onClick) onClick(e);
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
			}}
			className={`text-[16px] sm:text-[16px] w-[4.5rem] flex items-center justify-center text-nowrap ${item.name === 'Board'
				? currentPath.startsWith('/board') && 'font-bold'
				: currentPath === item.href && 'font-bold'
				} ${(item.name === 'Home') ? `text-white hover:text-gray-300 sm:text-transparent sm:hover:text-transparent` : 'text-white hover:text-gray-300'
				}`}
		>
			{item.name}
		</Link>
	);
}
