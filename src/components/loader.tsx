"use client"
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import CoatLoader from './Icons/CoatLoader';



const Loader = ({ finishLoading }: { finishLoading: () => void }) => {
	const [isMounted, setIsMounted] = useState(false);

	const animate = () => {
		const loader = anime.timeline({
			complete: () => finishLoading(),
		});

		loader
			.add({
				targets: '#coat rect',
				delay: 300,
				duration: 1500,
				easing: 'easeInOutQuart',
				strokeDashoffset: [anime.setDashoffset, 0],
			})
			.add({
				targets: '#coat .notket',
				duration: 700,
				easing: 'easeInOutQuart',
				opacity: 1,
			})
			.add({
				targets: '#coat',
				delay: 500,
				duration: 300,
				easing: 'easeInOutQuart',
				opacity: 0,
				scale: 0.1,
			})
			.add({
				targets: '#coat',
				duration: 200,
				easing: 'easeInOutQuart',
				opacity: 0,
				zIndex: -1,
			});
	};

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 10);
		animate();
		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			<Helmet bodyAttributes={{ class: `hidden` }} />

			<div className={`block max-w-[100px] transition-all duration-250 ease-custom-bezier ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
				<CoatLoader />
			</div>
		</>
	);
};



export default Loader;
