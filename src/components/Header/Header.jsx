import React, { useEffect, useState } from 'react';
import "./Header.scss";
import ballImg from '../../../public/img/ball-img.png'
import tg from '../../../public/img/tg.png'
import gh from '../../../public/img/gh.png'

export default function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const useResize = () => {
		const [width, setWidth] = useState(window.innerWidth);

		useEffect(() => {
			const handleResize = () => {
				setWidth(window.innerWidth);
			};

			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}, []);

		return width;
	};

	const screenWidth = useResize();

	useEffect(() => {
		setMenuOpen(screenWidth <= 930);
	}, [screenWidth]);

	return (
		<div className='main-header'>
			<div className='wrapper-header'>
				<nav className={`nav-header ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
					<div className='nav-header'>
						<img className='cube-img' src={ballImg} alt="" />
						{isMenuOpen ? (
							<div className='menu-icon' onClick={() => setMenuOpen(!isMenuOpen)}>
								<span>Menu</span>
							</div>
						) : (
							<div className='menu-items'>
								<ul><a href="#homePage">Главная</a></ul>
								<ul><a href="#engagementPage">Преимущества</a></ul>
								<ul><a href="#businessPage">Для бизнеса</a></ul>
								<ul><a href="https://t.me/e_v_pelevina" target='blank'><img className='icons' src={tg} alt="telegram" />Telegram</a></ul>
								<ul><a href="https://github.com/youKnow9/planner-rc" target='blank'><img className='icons' src={gh} alt="github" />GitHub</a></ul>
							</div>
						)}
					</div>
				</nav>
			</div>
		</div>
	);
}