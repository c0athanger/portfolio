"use client";
import React, { useState, useEffect } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import useScrollDirection from '../hooks/useScrollDirection';

interface NavProps {
	isHome: boolean;
}

const nav = ({ isHome }: NavProps) => {
	const [isMounted, setIsMounted] = useState(!isHome);
	const scrollDirection = useScrollDirection({ initialDirection: "down" });
	const [scrolledToTop, setScrolledToTop] = useState(true);
	const prefersReducedMotion = usePrefersReducedMotion();

	const handleScroll = () => {
		setScrolledToTop(window.scrollY < 50);

	}

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		const timeout = setTimeout(() => {
			setIsMounted(true);
		}, 100)

		window.addEventListener('scroll', handleScroll);

		return () => {
			clearTimeout(timeout);
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	const ResumeLink = (
		<a
			className=""
			href="/resume.pdf"
			target="_blank"
			rel="noopener noreferrer"
		>
			Resume
		</a>
	);
	return (
		<div className={`bg-nav px-12 md:px-6 lg:px-10 z-[11] filter-none pointer-events-auto select-auto backdrop-blur fixed w-full transition-all duration-250 ease-custom-bezier ${scrollDirection === 'up' && !scrolledToTop
			? 'bg-[rgba(10,25,47,0.85)] h-16 shadow-[0_10px_30px_-10px_var(--navy-shadow)] translate-y-0'
			: scrollDirection === 'down' && !scrolledToTop
				? 'h-16 shadow-[0_10px_30px_-10px_var(--navy-shadow)] -translate-y-16'
				: ''
			}`}>
			<div className="flex items-center relative w-full text-lightest-slate z-[12]">
				<div className={`flex justify-between items-center w-full ${isMounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
					<div className="flex items-center">
						<a href="/" className="text-2xl font-bold">
							Logo
						</a>
					</div>
					<nav className="flex space-x-4">
						<a href="#about" className="hover:text-primary">
							About
						</a>
						<a href="#projects" className="hover:text-primary">
							Projects
						</a>
						<a href="#contact" className="hover:text-primary">
							Contact
						</a>
						{ResumeLink}
					</nav>
				</div>
			</div>
		</div>
	)
}

export default nav