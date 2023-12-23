import React, { useEffect, useRef } from 'react';
import "./Footer.scss";
import ballImg from '../../../public/img/ball-img.png'
import tg from '../../../public/img/tg.png'
import gh from '../../../public/img/gh.png'

export default function Footer() {
	return (
		<div className='main-footer'>
			<div className='wrapper-header'>
				<nav className='nav-header foo'>
					<div>
						<p className='title-foo'>planner event, 2023</p>
					</div>
					<div className='nav-header foo-link'>
						<ul className='list-foo'><a href="https://t.me/e_v_pelevina" target='blank'><img className='icons-foo' src={tg} alt="telegram" /></a></ul>
						<ul className='list-foo'><a href="https://github.com/youKnow9/planner-rc" target='blank'><img className='icons-foo' src={gh} alt="github" /></a></ul>
					</div>
				</nav>
			</div>
		</div>
	);
};
