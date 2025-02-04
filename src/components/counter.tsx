'use client';

import { useEffect, useRef } from 'react';

type CounterType = {
	value: number;
	text: string;
};

export const Counter = ({ value, text }: CounterType) => {
	const ref = useRef<HTMLSpanElement | null>(null);

	useEffect(() => {
		document?.addEventListener('scroll', () => {
			if (
				ref.current &&
				animated === false &&
				document.documentElement.scrollTop >=
					ref.current.offsetTop - window.innerHeight + 50
			)
				startAnimation();
		});

		const targetValue1 = value;
		const duration = 1000;

		let startTime: number | null = 0;
		let rafId = 0;
		let animated = false;

		function animateCounters(timestamp: number | null) {
			if (timestamp === null) return;
			if (!startTime) startTime = timestamp;

			const elapsedTime = timestamp - startTime;

			const progress1 = Math.min(elapsedTime / duration, 1);
			const easedProgress1 = easeOutQuad(progress1);
			const currentValue1 = easedProgress1 * targetValue1;

			if (ref.current)
				ref.current.textContent = Math.floor(currentValue1).toString();

			if (elapsedTime < duration) {
				rafId = requestAnimationFrame(animateCounters);
			} else {
				if (ref.current) ref.current.textContent = targetValue1.toString();
			}
		}

		function easeOutQuad(t: number) {
			return t * (2 - t);
		}

		function startAnimation() {
			startTime = null;
			cancelAnimationFrame(rafId);
			animateCounters(performance.now());
			animated = true;
		}

		if (
			ref.current &&
			animated === false &&
			document.documentElement.scrollTop >=
				ref.current.offsetTop - window.innerHeight + 50
		)
			startAnimation();
	});

	return (
		<div className="py-4 px-[23px] rounded-md">
			<span
				ref={ref}
				className='flex items-center justify-center text-center text-xl relative after:block after:content-["+"]'
			>
				0
			</span>
			<span className="flex items-center justify-center text-center text-base capitalize">
				{text}
			</span>
		</div>
	);
};
