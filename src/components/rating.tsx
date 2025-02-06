'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type Props = {
	value: number;
	isEditing?: boolean;
	className?: string;
};

export const Rating = ({ value, isEditing, className }: Props) => {
	const ratingRef = useRef<HTMLDivElement>(null);
	const [ratingValue, setRatingValue] = useState<number>(value);
	const [selectedHoverStarCount, setSelectedHoverStarCount] =
		useState<number>(0);

	const initRatings = () => {
		const ratingActive: HTMLDivElement | null | undefined =
			ratingRef.current?.querySelector('.rating__active');

		if (ratingActive) {
			const ratingActiveWidth = ratingValue / 0.05;
			ratingActive.style.width = `${ratingActiveWidth}%`;
		}
	};
	useEffect(() => {
		if (ratingRef.current) {
			initRatings();
		}
	}, [ratingRef, ratingValue]);

	return (
		<div ref={ratingRef} className={cn('flex items-end text-2xl', className)}>
			<div className="relative before:content-['★★★★★'] text-secondary">
				<div className="rating__active absolute w-0 h-full top-0 left-0 overflow-hidden after:content-['★★★★★'] after:absolute after:w-full  after:h-full after:top-0 after:left-0 after:text-amber-300"></div>
				<div className="flex absolute w-full h-full top-0 left-0">
					{[...Array(5)].map((_, index) => {
						return (
							<input
								type="radio"
								value={index + 1}
								name="rating"
								key={index}
								className={cn(
									'cursor-pointer basis-1/5 h-full opacity-0 ',
									index + 1 <= selectedHoverStarCount && 'text-amber-500'
								)}
								onClick={() => {
									if (isEditing) {
										setRatingValue(index + 1);
									}
								}}
								onMouseOver={() => {
									if (isEditing) {
										setSelectedHoverStarCount(index + 1);
										setRatingValue(index + 1);
									}
								}}
								onMouseOut={() => {
									if (isEditing) {
										setSelectedHoverStarCount(0);
										setRatingValue(3.6);
									}
								}}
							/>
						);
					})}
				</div>
			</div>
			<div className="pl-2 text-[12px] leading-5 lg:text-sm">
				{ratingValue}/5
			</div>
		</div>
	);
};
