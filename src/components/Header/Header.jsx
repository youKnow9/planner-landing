import React, { useEffect, useRef } from 'react';
import "./Header.scss";
import cubeImg from '../../../public/img/cube.png'
import tg from '../../../public/img/tg.png'
import gh from '../../../public/img/gh.png'
// import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className='main-header'>
			<div className='wrapper-header'>
				<nav className='nav-header'>
					<div className='nav-header'>
						<img className='cube-img' src={cubeImg} alt="" />
						<ul><a href="#homePage">Главная</a></ul>
						<ul><a href="#engagementPage">Преимущества</a></ul>
						<ul><a href="#businessPage">Для бизнеса</a></ul>
					</div>
					<div className='nav-header'>
						<ul><a href="https://t.me/e_v_pelevina" target='blank'><img className='icons' src={tg} alt="telegram" />Telegram</a></ul>
						<ul><a href="https://github.com/youKnow9/planner-rc" target='blank'><img className='icons' src={gh} alt="github" />GitHub</a></ul>
					</div>
				</nav>
			</div>
		</div>
	);
};
