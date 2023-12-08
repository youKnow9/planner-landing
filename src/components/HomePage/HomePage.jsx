import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./HomePage.scss"
import PrimitiveComponent from '../Ball/Ball'
export default function HomePage () {
	// const sides = ['front', 'back', 'right', 'left', 'top', 'bottom'];
	// const cubeRef = useRef(null);

	// useEffect(() => {
	// 	const tl = gsap.timeline({ repeat: -1 });

	// 	const animateTiles = (i) => {
	// 		tl.to(`.side-${i} .tile`, {
	// 			duration: 0.5,
	// 			scale: 0.25,
	// 			rotate: 90,
	// 			z: '-50vmin',
	// 			yoyo: true,
	// 			repeat: 10,
	// 			repeatDelay: 1,
	// 			stagger: {
	// 				amount: 0.6,
	// 				grid: 'auto',
	// 				from: 'edges',
	// 			},
	// 		}, i * 0.1);
	// 	};

	// 	Array.from(cubeRef.current.children).forEach((face, i) => animateTiles(i));


	// 	return () => tl.kill();
	// }, []);

	return (
		<div id="homePage" className='home-page-main'>
			<div className='home-page-wapper'>
				<div className='home-page-title'>
					<p>planner</p>
					<p className='event'>event</p>
				</div>

				<PrimitiveComponent />
			{/* <div className="container">
				<div className="cube" ref={cubeRef}>
					{sides.map((side, i) => (
						<div key={i} className={`side-${i} ${side} side`}>
							{[...Array(49)].map((_, x) => (
								<div key={x} className="tile"></div>
							))}
						</div>
					))}
				</div>
			</div> */}
			</div>
		</div>
	);
};

